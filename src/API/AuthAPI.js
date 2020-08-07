const baseUrl = 'http://localhost:8000'

const register = async (userData) => {
  let response = await fetch(`${baseUrl}/api/users/`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(userData)
  })
  return response
}

const login = async (userData) => {
  let response = await fetch(`${baseUrl}/token-auth/`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(userData)
  })
  return response
}

export default {
  register,
  login,

}
