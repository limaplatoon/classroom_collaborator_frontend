import React, { useState, useEffect } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/form'
// import api from '../API/ReviewsAPI' 
import ReviewList from '../components/ReviewsList'
import ReviewForm from '../ReviewForm/ReviewForm'

const MyReviewsPage = () => {

//set the reviews for the current user in a list in state 	
const [reviews, setreviews] = useState([{id:1,User:'Michael',class_section:'Section AB345',Description: "I loved this class",Professor: "Dr. Professorson"},{id:2,User:'John',class_section:'Section TQ765',Description: "I Hated this class",Professor: "Mr. Professordaughter"},{id:1,User:'Michael',class_section:'Section AB346',Description: "I loved this class",Professor: "Dr. Professorson"},{id:2,User:'John',class_section:'Section TQ766',Description: "I Hated this class",Professor: "Mr. Professordaughter"}])

const [UserSections, UserSections] = useState([{}])


//we'll fetch 
//Unauthorized until we get the token working on the front end
// useEffect(() => {
	// api.fetchReviews().then(listOfMovies => {
	// 	setreviews(listOfMovies);
	// });

// useEffect(() => {
	// api.fetchUserSections().then(listOfMovies => {
	// 	setreviews(listOfMovies);
	// });










	
  return (
    <div>
		<h1>Leave a new Review for one of your classes here
        </h1>
		<br></br>
		<ReviewForm UserSections={UserSections} />

<h2> Your Past Reviews! </h2>
        <ReviewList Reviews={reviews} />
    </div>
  )
}

export default MyReviewsPage





// 	<Jumbotron>
//   <h1>Hello, world!</h1>
//   <p>
//     This is a simple hero unit, a simple jumbotron-style component for calling
//     extra attention to featured content or information.
//   </p>
// </Jumbotron>