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
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `jwt ${localStorage.getItem('token')}`)

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: userData,
    redirect: 'follow'
  };

  let response = await fetch(`${baseUrl}/api/profile/`, requestOptions)
  return response
}

const updateProfile = async (userData) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `jwt ${localStorage.getItem('token')}`)

  const requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: userData,
    redirect: 'follow'
  };

  let response = await fetch(`${baseUrl}/api/profile/`, requestOptions)
  return response
}

export default { getProfile, createProfile, updateProfile }
