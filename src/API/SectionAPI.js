const baseUrl = 'http://localhost:8000'
const token = localStorage.getItem('token')


const getMySections = async () => {
  const headers = new Headers()
  headers.append('Authorization', `jwt ${token}`)
  const requestOptions = {
      method: 'GET',
      headers: headers,
    }

  // let response = await fetch(`${baseUrl}/api/current_user/sections/all`, requestOptions)
  let response = await fetch(`${baseUrl}/api/sections/mine`, requestOptions)
  return response
  }

const getSections = async () => {
  let response = await fetch(`${baseUrl}/api/sections`, {
    headers: {
      'Content-Type': 'application/json',
      'authorization': `jwt ${token}`
    }
  })
  return response
}

const newSection = async (formData) => {
  const headers = new Headers()
  headers.append('Authorization', `jwt ${token}`)
  const requestOptions = {
      method: 'POST',
      headers: headers,
      body: formData,
    }

  let response = await fetch(`${baseUrl}/api/sections/new`, requestOptions)
  return response
}

const addSectionStudents = async (sectionID) => {
  const headers = new Headers()
  headers.append('Authorization', `jwt ${token}`)
  const requestOptions = {
      method: 'PATCH',
      headers: headers,
    }

  let response = await fetch(`${baseUrl}/api/sections/${sectionID}/students`, requestOptions)
  return response
}

const removeSectionStudents = async (sectionID) => {
  const headers = new Headers()
  headers.append('Authorization', `jwt ${token}`)
  const requestOptions = {
      method: 'DELETE',
      headers: headers,
    }

  let response = await fetch(`${baseUrl}/api/sections/${sectionID}/students`, requestOptions)
  return response
}

export default {
  getMySections,
  getSections,
  newSection,
  addSectionStudents,
  removeSectionStudents,
}