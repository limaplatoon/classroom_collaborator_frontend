const baseUrl = 'http://localhost:8000'

const newNotes = async (formData) => {
  const token = localStorage.getItem('token')
  let response = await fetch(`${baseUrl}/api/notes/new`, {
    headers: {
      'Authorization': `JWT ${token}`,
    },
    method: 'POST',
    body: formData
  })
  return response
}

export default {
  newNotes,
}