import baseUrl from '.EventsAPI';

const fetchReviews = () => {
	return fetch (`${baseUrl}/api/current_user/reviews/all`, {headers: {
	
		Authorization: `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json',
	}
	})
	  .then((response) => response.json())
  };

// Once Tokens are set up I can set up the url endpoint to create a new review.
  const addReviews = (ReviewObject) => {
	return fetch(`${baseUrl}/api/reviews/reviews/all`, {
	  headers: {
		Authorization: `JWT ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json'
	  },
	  method: 'POST',
	  body: JSON.stringify(ReviewObject)
	})
  }



  export default {
	  fetchReviews,
	  addReviews
  }