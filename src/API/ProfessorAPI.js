const baseUrl = 'http://localhost:8000'
const token = localStorage.getItem('token')

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