const baseUrl = 'http://localhost:8000'

const getNotifications = async () => {
  const token = localStorage.getItem('token')
  let response = await fetch(`${baseUrl}/api/alerts`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`,
    }
  })
  return response
}

const updateNotifications = async (alertID) => {
  const token = localStorage.getItem('token')
  let response = await fetch(`${baseUrl}/api/alerts/${alertID}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`,
    },
    method: 'PATCH',
    body: JSON.stringify({
      id: alertID,
      read_status: true,
    })
  })
  return response
}

export default {
  getNotifications,
  updateNotifications,
}