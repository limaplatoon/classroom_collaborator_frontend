import React, {useEffect, useState, useContext} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ClassSectionAPI from '../API/ClassSectionAPI'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import Button from 'react-bootstrap/Button'
import Popup from 'reactjs-popup'
import EventsAPI from '../API/EventsAPI'
import EventForm from '../components/EventForm/EventForm'
import MeetingForm from '../components/MeetingForm/MeetingForm'
import { NavBarContext } from "../context/NavBarContext"


import 'react-big-calendar/lib/css/react-big-calendar.css'
import './SectionDetailsPage.css'
import { MeetingContext } from '../context/MeetingContext'

const localizer = momentLocalizer(moment);

const formatDatetime = (datetime) => {
  return moment(datetime).format('M/D LT')
}

const setDateTime = (date, seconds) => {
  let hour = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds - hour*3600) / 60)
  date.setHours(hour, minutes)
}


const SectionDetails = (props) => {
  const {history} = props
  const sectionID = props.match.params.sectionID
  
  const {notes, getNotes, comments, getComments} = useContext(MeetingContext)
  const {loadNotifications} = useContext(NavBarContext)

  const [details, setDetails] = useState({})
  const [events, setEvents] = useState([])
  const [meetings, setMeetings] = useState([])
  const [openEventPopup, setOpenEventPopup] = useState(false)
  const [openMeetingPopup, setOpenMeetingPopup] = useState(false)

  const eventDetails = {
    title: '',
    start: 0,
    end: 0,
    description: '',
    location: '',
    viewable: false,
  }


  const loadDetails = async () => {
    const response = await ClassSectionAPI.getSectionDetails(sectionID)
    const responseJson = await response.json()
    setDetails(responseJson)    
    setMeetings(responseJson.meeting)
  }

  const loadEvents = async () => {
    const response = await ClassSectionAPI.getSectionEvents(sectionID)
    const responseJson = await response.json()
    setEvents(responseJson)
  }

  const loadData = async () => {
    await loadEvents()
    await loadDetails()
    await getNotes()
    await getComments()

  }

  useEffect(() => {
    loadData()
  }, [])

  const handleEventPopupClose = () => {
    setOpenEventPopup(false)
  }
  const handleMeetingPopupClose = () => {
    setOpenMeetingPopup(false)
    loadData()
  }

  const addEvent = async (eventID, title, startTime, stopTime, description, location, viewable, date) => {
    const start = new Date(date)
    const end = new Date(date)
    setOpenEventPopup(false)
    setDateTime(start, startTime)
    setDateTime(end, stopTime)
    const eventObj = {
      title: title,
      start: start,
      end: end,
      description: description,
      location: location,
      viewable: viewable,
    }
    

    const response = await EventsAPI.newSectionEvent(sectionID, eventObj)
    loadNotifications()
    loadEvents()
  }

  return (
    <div>
      <div className='sectionDetailTitle'>{details.Section} - {details.Name} - Professor {details.professor_first_name} {details.professor_last_name}</div>
      {(events.length > 0) &&
        <Calendar
          style={{backgroundColor: 'white', padding: '10px', borderRadius: '5px', border: '1px solid black'}}
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="agenda"
          events={events}
          views={['agenda']}
          toolbar={false}
        />
      }
      <Button style={{marginTop: '10px'}} onClick={() => setOpenEventPopup(true)}>add event</Button>

      <div className='meetingListTitle'>Section Meeting</div>
      {meetings &&
        <ListGroup className='meetingList' style={{border: '1px solid black'}}>
          {meetings.map((meeting, i) => 
            <ListGroup.Item className='meetingItem' key={i} onClick={() => history.push(`/meeting/${meeting.id}`)} >
              {formatDatetime(meeting.date)} - {comments[meeting.id] && comments[meeting.id].length} posts, {notes[meeting.id] && notes[meeting.id].length} notes
            </ListGroup.Item>
          )}
        </ListGroup>
      }
      <Button style={{marginTop: '10px'}} onClick={() => setOpenMeetingPopup(true)}>add meeting</Button>

      <Popup
        open={openEventPopup}
        closeOnDocumentClick={false}
        onClose={handleEventPopupClose}
      >
        <EventForm
          addEvent={addEvent}
          deleteEvent={false}
          eventDetails={eventDetails}
          closePopup={handleEventPopupClose}
          selectDate={true}
        />
      </Popup>

      <Popup
        open={openMeetingPopup}
        closeOnDocumentClick={false}
        onClose={setOpenMeetingPopup}
        contentStyle={{maxWidth: '400px'}}
      >
        <MeetingForm 
          sectionID={sectionID} 
          // addMeeting={addMeeting}
          closePopup={handleMeetingPopupClose}
        />
      </Popup>

    </div>
  )
}

export default SectionDetails
