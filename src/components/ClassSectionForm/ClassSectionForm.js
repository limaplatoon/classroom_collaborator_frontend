import React, {useState, Fragment, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './ClassSectionForm.css'
import ProfessorAPI from '../../API/ProfessorAPI'
import SectionAPI from '../../API/SectionAPI'


const ClassSectionForm = ({addSection, closePopup}) => {

  const [professorList, setProfessorList] = useState([])
  const [sectionList, setSectionList] = useState([])
  const [newSection, setNewSection] = useState(false)
  const [sectionIndex, setSectionIndex] = useState(undefined)
  const [newProfessor, setNewProfessor] = useState(false)
  const [professorIndex, setProfessorIndex] = useState(undefined)
  const [firstName, setFirstName] = useState(undefined)
  const [lastName, setLastName] = useState(undefined)
  const [sectionName, setSectionName] = useState(undefined)
  const [formError, setFormError] = useState(false)

  const loadSections = async () => {
    const response = await SectionAPI.getSections()
    const responseJson = await response.json()
    setSectionList(responseJson)
  }

  const loadProfessors = async () => {
    const response = await ProfessorAPI.getProfessors()
    const responseJson = await response.json()
    setProfessorList(responseJson)
  }

  useEffect(() => {
    loadSections()
    loadProfessors()
  }, [])

  const handleSectionChange = (event) => {
    setNewSection((event.target.selectedIndex - 1 === 0))
    setSectionIndex(event.target.selectedIndex - 2)
  }
  const handleProfessorChange = (event) => {
    setNewProfessor((event.target.selectedIndex - 1 === 0))
    setProfessorIndex(event.target.selectedIndex - 2)
  }

  const submitNewProfessor = async () => {
    const formData = new FormData()
    formData.append('last_name', lastName)
    formData.append('first_name', firstName)
    const response = await ProfessorAPI.newProfessor(formData)
    const responseJson = await response.json()
    console.log(responseJson.id)
    return responseJson.id
  }

  const submitNewSection = async (professorID) => {
    const formData = new FormData()
    formData.append('Section', sectionName)
    formData.append('Professor', professorID)
    const response = await SectionAPI.newSection(formData)
    const responseJson = await response.json()
    return responseJson.id
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let sectionID = undefined
    if (sectionIndex > -1) {
      sectionID = sectionList[sectionIndex].id
    }
    if (sectionIndex === -1) {
      if (professorIndex > -1 && sectionName) {
        const professorID = professorList[professorIndex].id
        sectionID = await submitNewSection(professorID)
      }
      if (professorIndex === -1 && sectionName) {
        const professorID = await submitNewProfessor()
        sectionID = await submitNewSection(professorID)
      }
    }
    sectionID ? addSection(sectionID) : setFormError(true)
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formClassSection">
          <Form.Label column sm={2}>Select Class</Form.Label>
          <Col sm={10}>
            <Form.Control as="select" custom onChange={handleSectionChange}>
              <option disabled selected value>-- select an option --</option>
              <option key='99'>- new section -</option>
              {sectionList.map((section, i) => 
                <option key={i}>{section.Section} - {section.professor_first_name} {section.professor_last_name}</option>
                )}
            </Form.Control>
          </Col>
        </Form.Group>

        {newSection &&
          <Fragment>
            <Form.Group as={Row} controlId="formProfessor">
              <Form.Label column sm={2}>Select Professor</Form.Label>
              <Col sm={10}>
                <Form.Control as="select" custom onChange={handleProfessorChange}>
                  <option disabled selected value>-- select an option --</option>
                  <option key='99'>- new professor -</option>
                  {professorList.map((professor, i) => 
                    <option key={i}>{professor.first_name} {professor.last_name}</option>
                    )}
                </Form.Control>
              </Col>
            </Form.Group>
            {newProfessor && 
              <Fragment>
                <Form.Group as={Row} controlId="formProfessorFirstName">
                  <Form.Label column sm={2}>Professor's First Name</Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" placeholder="first name..." onChange={(event) => {setFirstName(event.target.value)}}/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formProfessorLastName">
                  <Form.Label column sm={2}>Professor's Last Name</Form.Label>
                  <Col sm={10}>
                    <Form.Control type="text" placeholder="last name..." onChange={(event) => {setLastName(event.target.value)}}/>
                  </Col>
                </Form.Group>
              </Fragment>
            }
            <Form.Group as={Row} controlId="formSectionName">
              <Form.Label column sm={2}>Section Name</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="section name..." onChange={(event) => {setSectionName(event.target.value)}}/>
              </Col>
            </Form.Group>

          </Fragment>
        }
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <div className='sectionFormButtons'>
              <Button onClick={closePopup}>Cancel</Button>
              <Button type="submit">Add</Button>
            </div>
          </Col>
        </Form.Group>

        {formError && 
          <Col sm={{ span: 10, offset: 2 }}>
            <p style={{color: 'red', 'fontWeight': 'bold'}}>form fields incomplete</p>
          </Col>
        }
      </Form>
    </div>
  )
}

export default ClassSectionForm
