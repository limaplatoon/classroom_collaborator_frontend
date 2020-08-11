import baseUrl from './EventsAPI';

const fetchReviews = () => {
	return fetch (`http://127.0.0.1:8000/api/current_user/reviews/all`, {headers: {
	
		Authorization: `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json',
	}
	})
	  .then((response) => response.json())
  };

const fetchReviewsByProfessor = (ProfID) => {
	return fetch (`http://127.0.0.1:8000/api/reviews/${ProfID}`, 
	{headers: {
		Authorization: `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json',
	}
	})
	  .then((response) => response.json())
  };

// Once Tokens are set up I can set up the url endpoint to create a new review.
  const addReviews = (ReviewObject) => {
	return fetch(`http://127.0.0.1:8000/api/current_user/reviews/new`, {
	  headers: {
		Authorization: `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json'
	  },
	  method: 'POST',
	  body: JSON.stringify(ReviewObject)
	})
	.then((response) => response.json())
  }

  const fetchProfessor = (ProfID) => {
	  	return fetch (`http://127.0.0.1:8000/api/Professor/${ProfID}`, 
	{headers: {
		Authorization: `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json',
	}
	})
	  .then((response) => response.json())
  };
  



  export default {
	  fetchReviews,
	  addReviews,
	  fetchReviewsByProfessor,
	  fetchProfessor
  }