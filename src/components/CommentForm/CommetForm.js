import React, {useState, Fragment} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const CommentForm = ({submitForm, closePopup, parentID}) => {
  const [note, setNote] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('content', note)
    formData.append('parent_comment', parentID)
    submitForm(formData)
  }

  return (
    <div style={{margin: '50px'}}>
      <Form onSubmit={handleSubmit}>

        <Form.Group as={Row} controlId="formTextNote">
          {/* <Form.Label column sm={2}>Comment</Form.Label> */}
          <Col sm={12}>
            <Form.Control as="textarea" placeholder="comment..." value={note} onChange={(event) => setNote(event.target.value)}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={12}>
            <Button style={{marginRight: '10px'}} type="submit">submit</Button>
            <Button onClick={() => {closePopup()}}>cancel</Button>
          </Col>
        </Form.Group>

      </Form>
    </div>
  )
}

export default CommentForm