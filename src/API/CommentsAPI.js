const baseUrl = 'http://localhost:8000'

const newComment = async (formData) => {
  const token = localStorage.getItem('token')
  let response = await fetch(`${baseUrl}/api/comments/new`, {
    headers: {
      'Authorization': `JWT ${token}`,
    },
    method: 'POST',
    body: formData
  })
  return response
}

export default {
  newComment,
}