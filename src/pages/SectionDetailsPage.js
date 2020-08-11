import React, {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import ClassSectionAPI from '../API/ClassSectionAPI'
import EventsAPI from '../API/EventsAPI'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import './SectionDetailsPage.css'
import { MeetingContext } from '../context/MeetingContext'

const localizer = momentLocalizer(moment);

const formatDatetime = (datetime) => {
  return moment(datetime).format('M/D LT')
}


const SectionDetails = ({sectionID, history}) => {
  const {notes, getNotes, comments, getComments} = useContext(MeetingContext)

  const [details, setDetails] = useState({})
  const [events, setEvents] = useState([])
  const [meetings, setMeetings] = useState([])


  const loadDetails = async () => {
    const response = await ClassSectionAPI.getSectionDetails(1)
    const responseJson = await response.json()
    setDetails(responseJson)    
    setMeetings(responseJson.meeting)
  }

  const loadEvents = async () => {
    const response = await ClassSectionAPI.getSectionEvents(1)
    const responseJson = await response.json()
    setEvents(responseJson)
  }

  useEffect(() => {
    loadDetails()
    loadEvents()
    getNotes()
    getComments()
  }, [])

  
  return (
    <div>
      <div className='sectionDetailTitle'>{details.Section} - {details.Name} - Professor {details.professor_first_name} {details.professor_last_name}</div>
      <Calendar
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="agenda"
        events={events}
        views={['agenda']}
        toolbar={false}
      />
      <div className='meetingListTitle'>Meeting Notes</div>
      <ListGroup className='meetingList'>
        {meetings.map((meeting, i) => 
          <ListGroup.Item className='meetingItem' key={i} onClick={() => history.push("test2")} >
            {formatDatetime(meeting.date)} - {comments[meeting.id] && comments[meeting.id].length} posts, {notes[meeting.id] && notes[meeting.id].length} notes
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  )
}

export default SectionDetails
