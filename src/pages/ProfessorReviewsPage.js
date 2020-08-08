import React, { useState, useEffect } from 'react'
// import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/form'
import ReviewsAPI from '../API/ReviewsAPI' 
import ClassSectionAPI from '../API/ClassSectionAPI' 
import ReviewList from '../components/Reviews/ReviewsList'
import ReviewForm from '../ReviewForm/ReviewForm'

const ProfessorReviewsPage = () => {

//This is used for the User's already created reviews 	
const [reviews, setreviews] = useState([{id:1,User:'Michael',class_section:'Biology AB345',Description: "Example Review",Professor: "Dr. Exampleson"}])


//We need to pass in the ProfID from the Route URL!

useEffect(() => {
const ProfID = 1
ReviewsAPI.fetchReviewsByProfessor(ProfID).then(ListOfReviewsByProfessor => {
	setreviews(ListOfReviewsByProfessor)})
});

	
  return (
    <div>
		{/* <h1>Leave a new Review for this professor here
        </h1>
		<br></br>
		<ReviewForm UserSections={UserSections} /> */}

<h2> Professor _____'s Reviews! </h2>
        <ReviewList Reviews={reviews} />
    </div>
  )
}

export default ProfessorReviewsPage