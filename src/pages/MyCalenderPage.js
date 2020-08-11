import React, {useState, useEffect, useContext} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import Popup from 'reactjs-popup'
import API from '../API/EventsAPI'
import SectionAPI from '../API/ClassSectionAPI'
import ClassMeetingAPI from '../API/ClassMeetingAPI'
import { NavBarContext } from "../context/NavBarContext"

import 'react-big-calendar/lib/css/react-big-calendar.css'
import EventForm from '../components/EventForm/EventForm'
const localizer = momentLocalizer(moment);

const setDateTime = (date, seconds) => {
  let hour = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds - hour*3600) / 60)
  date.setHours(hour, minutes)
}

const MyCalenderPage = () => {
  const {loadNotifications} = useContext(NavBarContext)
  const [openPopup, setOpenPopup] = useState(false)
  const [events, setEvents] = useState([])
  const [eventDetails, setEventDetails] = useState({
    title: '',
    start: 0,
    end: 0,
    description: '',
    location: '',
    viewable: false,
  })
 
  const loadUserEvents = async () => {
    const response = await API.getEvents()
    const responseJson = await response.json()
    responseJson.map((event) => {
      event['owner'] = 'user'
    })
    setEvents(responseJson)
  }

  const loadSectionEvent = async (sectionID) => {
    const response = await SectionAPI.getSectionEvents(sectionID)
    const responseJson = await response.json()
    responseJson.map((event) => {
      event['owner'] = 'section'
    })
    setEvents((oldEvents) => {
      return [...oldEvents].concat(responseJson)
    })
  }

  const loadSectionEvents = async () => {
    const responseJson = await ClassMeetingAPI.getSections()
    const sections = responseJson.sections
    sections.map((section) => loadSectionEvent(section.ID))
  }
  const loadEvents = async () => {
    await loadUserEvents()
    await loadSectionEvents()
  }
  
  useEffect(() => {
    loadEvents()
  }, [])


  const handleSelectSlot = ({start, end}) => {
    setEventDetails({
      title: '',
      start: start,
      end: end,
      description: '',
      location: '',
      viewable: false,
    })
    setOpenPopup(true)
  }
  
  const handleSelectEvent = (event) => {
    let details = {...event}
    details.start = new Date(details.start)
    details.end = new Date(details.end)
    setEventDetails(details)
    setOpenPopup(true)
  }
  
  const handlePopupClose = () => {
    setOpenPopup(false)
  }
  
  const addEvent = async (eventID, title, startTime, stopTime, description, location, viewable, date) => {
    setOpenPopup(false)
    setDateTime(eventDetails.start, startTime)
    setDateTime(eventDetails.end, stopTime)
    const eventObj = {
      title: title,
      start: eventDetails.start,
      end: eventDetails.end,
      description: description,
      location: location,
      viewable: viewable,
    }
    
    if (eventID) {
      const response = await API.updateEvent(eventID, eventObj)
    } else {
      const response = await API.newEvent(eventObj)
    }
    loadNotifications()
    loadEvents()
  }

  const deleteEvent = async (eventID) => {
    const response = await API.deleteEvent(eventID)
    loadEvents()
    loadNotifications()
    setOpenPopup(false)
  }

  const eventStyleGetter = (event) => {
    const color = (event.owner === 'user' ) ? 'blue' : 'black'
    return {style: {backgroundColor: color}}
  }

  return (
    <div>
      <br />
      <Calendar
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: "100vh" }}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        eventPropGetter={eventStyleGetter}
      />
      <Popup
        open={openPopup}
        closeOnDocumentClick={false}
        onClose={handlePopupClose}
      >
        <EventForm
          addEvent={addEvent}
          deleteEvent={deleteEvent}
          eventDetails={eventDetails}
          closePopup={handlePopupClose}
          selectDate={false}
        />
      </Popup>
      <br />
    </div>
  )
}

export default MyCalenderPage
