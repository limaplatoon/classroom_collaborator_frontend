import baseUrl from './EventsAPI';


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
	return fetch(`${baseUrl}/api/sections/new/`, {
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
	return fetch(`http://127.0.0.1:8000/api/current_user/sections/${SectionID}/AddAStudent`, {
	  headers: {
		Authorization: `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json'
	  },
	  method: 'Get',
	})
  }


  export default {
	  fetchCurrentUserClasses,
	  addSection,
	  AddUserToSection,
		fetchAllClasses,
		getSectionEvents
  }