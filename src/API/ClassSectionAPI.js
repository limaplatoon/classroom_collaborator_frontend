import baseUrl from '.EventsAPI';


const fetchCurrentUserClasses = () => {
	return fetch (`${baseUrl}/api/current_user/sections/all`, {headers: {
	
		Authorization: `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json',
	}
	})
	  .then((response) => response.json())
  };

// NOT YET CREATED Send enough Information in this section object to the api endpoint to create a new section and add the current user to it
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


//NOT YET CREATED this should be easy to create, just add the current user to the sectionid
const AddUserToSection = (SectionID) => {
	return fetch(`${baseUrl}/api/sections/${SectionID}/AddAStudent`, {
	  headers: {
		Authorization: `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json'
	  },
	  method: 'Get',
	})
  }
