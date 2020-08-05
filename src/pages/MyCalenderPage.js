import React, {useState, useEffect} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import Popup from 'reactjs-popup'
import API from '../API/EventsAPI'


import 'react-big-calendar/lib/css/react-big-calendar.css'
import EventForm from '../EventForm/EventForm'
const localizer = momentLocalizer(moment);

const setDateTime = (date, seconds) => {
  let hour = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds - hour*3600) / 60)
  date.setHours(hour, minutes)
}

const MyCalenderPage = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const [events, setEvents] = useState([])
  const [eventDetails, setEventDetails] = useState({
    title: undefined,
    start: 0,
    end: 0,
    description: undefined,
    location: undefined,
    viewable: false,
  })

  const loadEvents = async () => {
    const response = await API.getEvents()
    const responseJson = await response.json()
    setEvents(responseJson)
  }
  
  useEffect(() => {
    loadEvents()
  }, [])
  
  const handleSelectSlot = ({start, end}) => {
    setEventDetails({
      title: '',
      start: start,
      end: end,
      description: undefined,
      location: undefined,
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
  
  const addEvent = async (eventID, title, startTime, stopTime, description, location, viewable) => {
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
      userID: 1,
    }
    
    if (eventID) {
      const response = await API.updateEvent(eventID, eventObj)
      // const responseJson = await response.json()
    } else {
      const response = await API.newEvent(eventObj)
      // const responseJson = await response.json()
    }
    loadEvents()
  }

  const deleteEvent = async (eventID) => {
    const response = await API.deleteEvent(eventID)
    // const responseJson = await response.json()
    loadEvents()
    setOpenPopup(false)
  }

  const eventStyleGetter = (event) => {
    return {style: {backgroundColor: 'green'}}
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
        />
      </Popup>
      <br />
    </div>
  )
}

export default MyCalenderPage
