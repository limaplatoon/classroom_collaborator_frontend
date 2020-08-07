import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropZone from '../DropZone/DropZone'
import API from '../../API/NotesAPI'


const classList = [
  'Art 10',
  'Physics 200',
]

const NoteForm = () => {
  const [textNote, setTextNote] = useState(false)
  const [fileList, setFileList] = useState([])

  const handleSubmit = async (event) => {
    event.preventDefault()
    let formData = new FormData();
    formData.append('student', 1)
    formData.append('description', 'test')
    formData.append('meeting', 1)
    formData.append('file', fileList[0])
    API.newNotes(formData)
  }
  

  return (
    <div>
      <Form onSubmit={handleSubmit}>

        <Form.Group as={Row} controlId="formClassSection">
          <Form.Label column sm={2}>Select Class</Form.Label>
          <Col sm={10}>
            <Form.Control as="select" custom>
              {classList.map((myClass, i) => 
                <option key={i}>{myClass}</option>
                )}
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formNoteDescription">
          <Form.Label column sm={2}>Note Description</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="description..." />
          </Col>
        </Form.Group>
                
        <fieldset>
          <Form.Group as={Row} controlId='formType'>
            <Form.Label as="legend" column sm={2}>
              Radios
            </Form.Label>
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="text notes"
                name="formType"
                id="textNotes"
                checked={textNote}
                onChange={() => setTextNote(!textNote)}
              />
              <Form.Check
                type="radio"
                label="file notes"
                name="formType"
                id="fileNotes"
                checked={!textNote}
                onChange={() => setTextNote(!textNote)}
              />
            </Col>
          </Form.Group>
        </fieldset>
        
        {textNote &&
          <Form.Group as={Row} controlId="formTextNote">
            <Form.Label column sm={2}>Text Notes</Form.Label>
            <Col sm={10}>
              <Form.Control as="textarea" placeholder="notes..." />
            </Col>
          </Form.Group>
        }


        <Form.Group as={Row} controlId="formFileNote">
            <Form.Label column sm={2}>File Notes</Form.Label>
            <Col sm={10}>
              <DropZone setFileList={setFileList} />
            </Col>
          </Form.Group>


        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">submit</Button>
          </Col>
        </Form.Group>
      </Form>


      
    </div>
  )
}

export default NoteForm
