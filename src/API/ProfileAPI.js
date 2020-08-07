const baseUrl = 'http://localhost:8000'

const getProfile = async () => {
  let response = await fetch(`${baseUrl}/api/profile`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `jwt ${localStorage.getItem('token')}`
    }
  })
  return response
}

const createProfile = async (userData) => {
  let response = await fetch(`${baseUrl}/api/profile/`, {
    headers: {
      //'Content-Type': 'application/json',
      'Authorization': `jwt ${localStorage.getItem('token')}`,


    },
    method: 'POST',
    body: JSON.stringify(userData)
  })
  return response
}

export default { getProfile, createProfile }
