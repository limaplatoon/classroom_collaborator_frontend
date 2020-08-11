import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReviewsAPI from '../API/ReviewsAPI' 
import ClassSectionAPI from '../API/ClassSectionAPI' 
import ReviewList from '../components/Reviews/ReviewsList'
import ReviewForm from '../ReviewForm/ReviewForm'

const ProfessorReviewsPage = (props) => {

//This is used for the User's already created reviews 	
const [reviews, setreviews] = useState([{id:1,User:'Michael',class_section:'Biology AB345',Description: "Example Review",Professor: "Dr. Exampleson"}])

const[CurrentProfName, setCurrentProfName] = useState(["Professor example"])


const ProfID = useParams();



useEffect(() => {
ReviewsAPI.fetchReviewsByProfessor(props.match.params.ProfID).then(ListOfReviewsByProfessor => {
	setreviews(ListOfReviewsByProfessor["reviews"])})
	
},[ProfID]);


useEffect(() => {
ReviewsAPI.fetchProfessor(props.match.params.ProfID).then(ProfName => {
	setCurrentProfName(ProfName["Professor"])})
	
},[ProfID]);

	
  return (
    <div>
		{/* <h1>Leave a new Review for this professor here
        </h1>
		<br></br>
		<ReviewForm UserSections={UserSections} /> */}

<h2> Professor {CurrentProfName[0].Last_name} Reviews! </h2>
        <ReviewList Reviews={reviews} />
    </div>
  )
}

export default ProfessorReviewsPage