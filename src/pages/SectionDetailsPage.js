import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import ClassSectionAPI from '../API/ClassSectionAPI'
import EventsAPI from '../API/EventsAPI'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import './SectionDetailsPage.css'

const localizer = momentLocalizer(moment);
const fakeMeetings = [
  {
    date: new Date(2020, 7, 1),
    posts: 3,
    notes: 2,
  },
  {
    date: new Date(2020, 7, 3),
    posts: 10,
    notes: 5,
  },
  {
    date: new Date(2020, 7, 4),
    posts: 1,
    notes: 0,
  },

]
const formatDatetime = (datetime) => {
  return moment(datetime).format('M/D LT')
}


const SectionDetails = ({sectionID}) => {
  const [details, setDetails] = useState({})
  const [events, setEvents] = useState([])
  const [meetings, setMeetings] = useState(fakeMeetings)


  const loadDetails = async () => {
    const response = await ClassSectionAPI.getSectionDetails(1)
    const responseJson = await response.json()
    setDetails(responseJson)
  }

  const loadEvents = async () => {
    const response = await ClassSectionAPI.getSectionEvents(1)
    const responseJson = await response.json()
    setEvents(responseJson)
  }
  

  useEffect(() => {
    loadDetails()
    loadEvents()
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
          <ListGroup.Item className='meetingItem' key={i} >
            {formatDatetime(meeting.date)} - {meeting.posts} posts, {meeting.notes} notes
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  )
}

export default SectionDetails
