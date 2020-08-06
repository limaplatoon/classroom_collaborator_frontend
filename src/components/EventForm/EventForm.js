import React, {useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import TimePicker from 'react-bootstrap-time-picker'

const dateToMinutes = (date) => {
  if (date) {
    return (date.getHours() * 3600 + date.getMinutes() * 60)
  }
  return date
}

const dateToStr = (date) => {
  return `${date.getMonth() + 1}/${date.getDate()}`
}

const EventForm = (props) => {
  const [title, setTitle] = useState(props.eventDetails.title)
  const [startTime, setStartTime] = useState(dateToMinutes(props.eventDetails.start))
  const [stopTime, setStopTime] = useState(dateToMinutes(props.eventDetails.end))
  const [description, setDescription] = useState(props.eventDetails.description)
  const [location, setLocation] = useState(props.eventDetails.location)
  const [viewable, setViewable] = useState(props.eventDetails.viewable)
  const [titleWarning, setTitleWarning] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!title) {
      setTitleWarning(true)
    } else {
    props.addEvent(props.eventDetails.id, title, startTime, stopTime, description, location, viewable)
    }
  }

  const handleDelete = (event) => {
    event.preventDefault()
    props.deleteEvent(props.eventDetails.id)
  }
  
  const handleClose = (event) => {
    event.preventDefault()
    props.closePopup()
  }

  const handleTitleChange = event => {
    setTitle(event.target.value)
    if (!event.target.value) {
      setTitleWarning(true)
    } else {
      setTitleWarning(false)
    }
  }
  const handleStartTimeChange = time => setStartTime(time)
  const handleStopTimeChange = time => setStopTime(time)
  const handleDescriptionChange = event => setDescription(event.target.value)
  const handleSetLocation = event => setLocation(event.target.value)
  const handleSetViewable = event => setViewable(!viewable)
  
  
  return (
    <div style={{display: 'relative', margin: '5px 20px 20px 20px'}}>
      <div style={{textAlign: 'right'}}>
        <strong>{dateToStr(props.eventDetails.start)} → {dateToStr(props.eventDetails.end)}</strong>
      </div>
      <Form>
        <Row>
          <Col xs={7}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                placeholder="title..." 
                value={title} 
                onChange={handleTitleChange} 
                style={{border: titleWarning ? '2px solid red': null}}
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group controlId="formStartTime">
                  <Form.Label>Start Time</Form.Label>
                  <TimePicker start="0:00" end="23:59" step={30} value={startTime} onChange={handleStartTimeChange} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formStopTime">
                  <Form.Label>Stop Time</Form.Label>
                  <TimePicker start="0:00" end="23:59" step={30} value={stopTime} onChange={handleStopTimeChange} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as='textarea' placeholder="description..." value={description} onChange={handleDescriptionChange} />
            </Form.Group>
          </Col>
          <Col style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
              <Form.Group controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control placeholder="location..." value={location} onChange={handleSetLocation} />
              </Form.Group>
              <Form.Group controlId="formViewable">
                <Form.Check type="checkbox" label="Viewable by Friends" checked={viewable} onChange={handleSetViewable} />
              </Form.Group>
            </div>

            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <Button variant="primary" style={{marginLeft: '5px'}} onClick={handleClose}>
                Cancel
              </Button>
              {(props.eventDetails.id && <Button variant="primary" style={{marginLeft: '5px'}} onClick={handleDelete}>Delete</Button>)}
              <Button variant="primary" style={{marginLeft: '5px'}} type="submit" onClick={handleSubmit}>
                {(props.eventDetails.id) ? 'Update' : 'Create' }
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default EventForm
