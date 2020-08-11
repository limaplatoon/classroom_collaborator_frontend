const baseUrl = 'http://localhost:8000'

const getEvents = async () => {
  const token = localStorage.getItem('token')
  let response = await fetch(`${baseUrl}/api/events`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`,
    }
  })
  return response
}

const updateEvent = async (eventID, eventObj) => {
  const token = localStorage.getItem('token')
  let response = await fetch(`${baseUrl}/api/events/${eventID}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`,
    },
    method: 'PATCH',
    body: JSON.stringify(eventObj)
  })
  return response
}

const newEvent = async (eventObj) => {
  const token = localStorage.getItem('token')
  let response = await fetch(`${baseUrl}/api/events/new`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`,
    },
    method: 'POST',
    body: JSON.stringify(eventObj)
  })
  return response
}

const newSectionEvent = async (sectionID, eventObj) => {
  const token = localStorage.getItem('token')
  let response = await fetch(`${baseUrl}/api/sections/${sectionID}/events`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`,
    },
    method: 'POST',
    body: JSON.stringify(eventObj)
  })
  return response
}

const deleteEvent = async (eventID) => {
  const token = localStorage.getItem('token')
  let response = await fetch(`${baseUrl}/api/events/${eventID}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`,
    },
    method: 'DELETE',
  })
  return response
}

export default {
  getEvents,
  updateEvent,
  newEvent,
  deleteEvent,
  newSectionEvent,
}