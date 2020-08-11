import React, {useState, Fragment} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropZone from '../DropZone/DropZone'


const NoteForm = ({ submitForm, closePopup}) => {
  const [textNote, setTextNote] = useState(true)
  const [fileList, setFileList] = useState([])
  const [description, setDescription] = useState('')
  const [note, setNote] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    let formData = new FormData()
    formData.append('description', description)
    
    if (textNote) {
      formData.append('text', note)
    } else{
      formData.append('file', fileList[0])
    }
    submitForm(formData)
  }
  

  return (
    <div>
      <Form onSubmit={handleSubmit}>

        <Form.Group as={Row} controlId="formNoteDescription">
          <Form.Label column sm={2}>Note Description</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="description..." value={description} onChange={(event) => setDescription(event.target.value)}/>
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
              <Form.Control as="textarea" placeholder="notes..." value={note} onChange={(event) => setNote(event.target.value)}/>
            </Col>
          </Form.Group>
        }

        {!textNote &&
          <Fragment>
            <Form.Group as={Row} controlId="formFileNote">
                <Form.Label column sm={2}>File Notes</Form.Label>
                <Col sm={10}>
                  <DropZone setFileList={setFileList} />
                </Col>
              </Form.Group>


          </Fragment>
        }
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">submit</Button>
            <Button onClick={() => {closePopup()}}>cancel</Button>
          </Col>
        </Form.Group>
      </Form>


      
    </div>
  )
}

export default NoteForm