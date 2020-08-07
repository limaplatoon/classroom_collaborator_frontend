const baseUrl = 'http://localhost:8000'
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImpvaG4iLCJleHAiOjE1OTc0MzE0NTIsImVtYWlsIjoiIn0.ST4QhUmUOKgumwo7LIUun-QR37z4Rk3ZPYuzseFeUBI'

const getProfessors = async () => {
  let response = await fetch(`${baseUrl}/api/professors`, {
    headers: {
      'Content-Type': 'application/json',
      'authorization': `jwt ${token}`
    }
  })
  return response
}

const newProfessor = async (formData) => {
  const headers = new Headers()
  headers.append('Authorization', `jwt ${token}`)
  const requestOptions = {
      method: 'POST',
      headers: headers,
      body: formData,
    }

  let response = await fetch(`${baseUrl}/api/professors/new`, requestOptions)
  return response
}



export default {
  getProfessors,
  newProfessor,
}