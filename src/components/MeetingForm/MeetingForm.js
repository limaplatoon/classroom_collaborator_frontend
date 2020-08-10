import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import API from '../../API/ClassMeetingAPI'

class MeetingForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sectionID: this.props.sectionID
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sectionID !== this.props.sectionID) {
      this.setState({
        sectionID: this.props.sectionID})
    }
  }
  
  handleSubmit = async (event) => {
    event.preventDefault()
    const class_section = event.target.elements.class_section.value;

    let newMeeting = {
      'class_section': class_section,
    }
    await API.newMeeting(newMeeting, this.state.sectionID)
    console.log('newMeeting:', newMeeting)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="class_section">
          <Form.Label>Class Section</Form.Label>
          <Form.Control as="textarea" rows="1"></Form.Control>
        </Form.Group>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form>
    )
  }
}

export default MeetingForm