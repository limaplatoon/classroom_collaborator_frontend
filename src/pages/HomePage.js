import React, { Component } from "react";
import API from '../API/ClassMeetingAPI'
import MeetingForm from '../components/MeetingForm/MeetingForm'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      section: [],
      meeting: [],
    }
  }
  
  componentDidMount() {
    API.getSections()
      .then((section) => this.setState({
        section: section
    }))
    API.getMeetings()
      .then((meeting) => this.setState({
        meeting: meeting
    }))
  }

  render() {
    const section = this.state.section
    const meeting = this.state.meeting

    //just logging the data
    for(let i = 0; i<meeting.length; i++) {
      console.log('meetings', meeting[i])
    }
    for(let i = 0; i<section.length; i++) {
      console.log('sections', section[i])
    }
    console.log()
    return (
      <div>
        <MeetingForm sectionID={section.id}/>
      </div>
    )
  }
}

export default HomePage;
