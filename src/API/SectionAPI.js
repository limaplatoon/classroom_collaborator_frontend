const baseUrl = 'http://localhost:8000'
const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImpvaG4iLCJleHAiOjE1OTc0MzE0NTIsImVtYWlsIjoiIn0.ST4QhUmUOKgumwo7LIUun-QR37z4Rk3ZPYuzseFeUBI'


const getMySections = async () => {
  const headers = new Headers()
  headers.append('Authorization', `jwt ${token}`)
  const requestOptions = {
      method: 'GET',
      headers: headers,
    }

  let response = await fetch(`${baseUrl}/api/current_user/sections/all`, requestOptions)
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
  // console.log('this part is working')
  // for (let pair of formData.entries()) {
  //   console.log(pair[0]+ ', ' + pair[1])
  // }

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


// const updateSections = async (alertID) => {
//   let response = await fetch(`${baseUrl}/api/alerts/${alertID}`, {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     method: 'PATCH',
//     body: JSON.stringify({
//       id: alertID,
//       read_status: true,
//     })
//   })
//   return response
// }

export default {
  getMySections,
  getSections,
  newSection,
}