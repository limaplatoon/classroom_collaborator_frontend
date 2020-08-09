const baseUrl = 'http://localhost:8000'
const token = localStorage.getItem('token')

const getEvents = async () => {
  let response = await fetch(`${baseUrl}/api/events`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `jwt ${token}`,
    }
  })
  return response
}

const updateEvent = async (eventID, eventObj) => {
  let response = await fetch(`${baseUrl}/api/events/${eventID}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `jwt ${token}`,
    },
    method: 'PATCH',
    body: JSON.stringify(eventObj)
  })
  return response
}

const newEvent = async (eventObj) => {
  let response = await fetch(`${baseUrl}/api/events/new`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `jwt ${token}`,
    },
    method: 'POST',
    body: JSON.stringify(eventObj)
  })
  return response
}

const deleteEvent = async (eventID) => {
  let response = await fetch(`${baseUrl}/api/events/${eventID}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `jwt ${token}`,
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
}