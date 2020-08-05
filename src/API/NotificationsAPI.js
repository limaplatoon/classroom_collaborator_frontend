const baseUrl = 'http://localhost:8000'

const getNotifications = async () => {
  let response = await fetch(`${baseUrl}/api/alerts`, {
    headers: {
      'Content-Type': 'application/json',
    }
  })
  return response
}

const updateNotifications = async (alertID) => {
  let response = await fetch(`${baseUrl}/api/alerts/${alertID}`, {
    headers: {
      'Content-Type': 'application/json',
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