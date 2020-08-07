import baseUrl from './EventsAPI';


const fetchCurrentUserClasses = () => {
	return fetch (`${baseUrl}/api/current_user/sections/all`, {headers: {
	
		Authorization: `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json',
	}
	})
	  .then((response) => response.json())
  };


const fetchAllClasses = () => {
	return fetch (`http://127.0.0.1:8000/api/sections/all`, {headers: {
	
		// Authorization: `JWT ${localStorage.getItem('token')}`,
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



const AddUserToSection = (SectionID) => {
	return fetch(`${baseUrl}/api/sections/${SectionID}/AddAStudent`, {
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
	  fetchAllClasses
  }