import React, {useState, useRef} from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import Popup from 'reactjs-popup'
import fakeEvents from './fakeEvents'


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
  const [events, setEvents] = useState(fakeEvents)
  const [eventIndex, setEventIndex] = useState(-1)
  const [eventDetails, setEventDetails] = useState({
    title: undefined,
    start: 0,
    end: 0,
    description: undefined,
    location: undefined,
    viewable: false,
  })

  
  const handleSelectSlot = ({start, end}) => {
    setEventIndex(-1)
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
    setEventIndex(events.indexOf(event))
    setEventDetails({...event})
    setOpenPopup(true)
  }
  
  const handlePopupClose = () => {
    setOpenPopup(false)
  }
  
  const addEvent = (title, startTime, stopTime, description, location, viewable) => {
    setOpenPopup(false)
    setDateTime(eventDetails.start, startTime)
    setDateTime(eventDetails.end, stopTime)
    const newDetails = {
      title: title,
      start: eventDetails.start,
      end: eventDetails.end,
      description: description,
      location: location,
      viewable: viewable,
    }

    if (eventIndex > -1) {
      const newEvents = [...events]
      newEvents[eventIndex] = newDetails
      setEvents(newEvents)
      console.log(eventIndex)
    } else {
      setEvents([...events, newDetails])
    }
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
          eventDetails={eventDetails}
          closePopup={handlePopupClose}
        />
      </Popup>
      <br />
    </div>
  )
}

export default MyCalenderPage
