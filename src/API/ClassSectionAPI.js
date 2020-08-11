const baseUrl = 'http://127.0.0.1:8000'


const fetchCurrentUserClasses = () => {
	return fetch (`http://127.0.0.1:8000/api/current_user/sections/all`, {headers: {
	
		Authorization: `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json',
	}
	})
	  .then((response) => response.json())
  };


const fetchAllClasses = () => {
	return fetch (`http://127.0.0.1:8000/api/sections/all`, {headers: {
	
		Authorization: `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json',
	}
	})
	  .then((response) => response.json())
  };


const addSection = (SectionObject) => {
	return fetch(`http://127.0.0.1:8000/api/sections/new`, {
	  headers: {
		Authorization: `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json'
	  },
	  method: 'POST',
	  body: JSON.stringify(SectionObject)
	})
  }

	const getSectionEvents = async (SectionID) => {
		let response = await fetch(`http://127.0.0.1:8000/api/sections/${SectionID}/events`, {
			headers: {
				Authorization: `JWT ${localStorage.getItem('token')}`,
				'Content-Type': 'application/json'
			}
		})
		return response
	}

const AddUserToSection = (SectionID) => {
	return fetch(`${baseUrl}/api/current_user/sections/${SectionID}/AddAStudent`, {
	  headers: {
		Authorization: `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json'
	  },
	  method: 'Get',
	})
	}
	
const getSectionDetails = async (SectionID) => {
	const token = localStorage.getItem('token')
	let response = await fetch(`${baseUrl}/api/sections/${SectionID}`, {
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `JWT ${token}`,
		}
	})
	return response
}

// const getSectionEvents = async (SectionID) => {
// 	const token = localStorage.getItem('token')
// 	let response = await fetch(`${baseUrl}/api/sections/${SectionID}/events`, {
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'Authorization': `JWT ${token}`,
// 		}
	// })
	// return response
// }


  export default {
	  fetchCurrentUserClasses,
	  addSection,
	  AddUserToSection,
		fetchAllClasses,
		getSectionDetails,
		getSectionEvents,
  }