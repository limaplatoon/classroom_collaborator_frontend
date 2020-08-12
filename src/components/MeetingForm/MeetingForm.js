import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import API from '../../API/ClassMeetingAPI'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'

class MeetingForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sectionID: this.props.sectionID,
      date: new Date()
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
    let newMeeting = {
      'class_section': this.state.sectionID,
      'date': moment(this.state.date).format('Y-M-D'),
    }
    await API.newMeeting(newMeeting)
    this.props.closePopup(true)
  }

  render() {
    return (
      <div style={{margin: '50px'}}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="class_section">
            <Form.Label>Date</Form.Label><br />
            <DatePicker
              selected={this.state.date}
              onChange={(newDate) => this.setState({date: newDate})}
            />

          </Form.Group>
          <Button onClick={() => this.props.closePopup()} style={{marginRight: '5px'}}>cancel</Button>
          <Button type="primary" htmlType="submit">submit</Button>
        </Form>
      </div>
    )
  }
}

export default MeetingForm