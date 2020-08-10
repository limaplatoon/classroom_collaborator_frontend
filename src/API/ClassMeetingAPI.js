const baseUrl = 'http://localhost:8000'

const getSections = async () => {
  let response = await fetch(`${baseUrl}/api/sections/all`, {
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    }
  })
  response = await response.json()
  return response
}

const getMeetings = async () => {
  let response = await fetch(`${baseUrl}/api/meetings/`, {
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    }
  })
  response = await response.json()
  return response
}

const newMeeting = async (meetingObj) => {
  let response = await fetch(`${baseUrl}/api/meetings/new/`, {
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(meetingObj)
  })
  response = await response.json()
  return response
}

const deleteMeeting = async (meetingID) => {
  let response = await fetch(`${baseUrl}/api/meetings/${meetingID}/`, {
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  })
}

export default {
  getSections,
  getMeetings,
  newMeeting,
  deleteMeeting
}
