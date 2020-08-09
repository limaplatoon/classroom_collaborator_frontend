const baseUrl = 'http://localhost:8000'
const token = localStorage.getItem('token')

// const getEvents = async () => {
//   let response = await fetch(`${baseUrl}/api/events`, {
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   })
//   return response
// }


const newNotes = async (formData) => {
  let response = await fetch(`${baseUrl}/api/notes/new`, {
    headers: {
      // 'Content-Type': 'multipart/form-data',
      'Authorization': `jwt ${token}`,
    },
    method: 'POST',
    // body: JSON.stringify(noteObj)
    body: formData
  })
  return response
}

export default {
  newNotes,
}