import React, { useState, useEffect } from 'react'
// import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/form'
import ReviewsAPI from '../API/ReviewsAPI' 
import ClassSectionAPI from '../API/ClassSectionAPI' 
import ReviewList from '../components/Reviews/ReviewsList'
import ReviewForm from '../ReviewForm/ReviewForm'
import { useHistory } from "react-router-dom";


const MyReviewsPage = () => {
	
const [redirect, setredirect] = useState(false)
const [reviews, setreviews] = useState()
const [UserSections, setUserSections] = useState()


let history = useHistory();
//we'll fetch 
//Unauthorized until we get the token working on the front end
useEffect(() => {
ReviewsAPI.fetchReviews().then(ListOfReviews => {
	console.log(ListOfReviews["reviews"])
	setreviews(ListOfReviews["reviews"])})
},[]);

useEffect(() => {
	ClassSectionAPI.fetchCurrentUserClasses().then(myClassSections => {
		
	setUserSections(myClassSections["sections"])
	})
},[]);


const HandleSubmitReview = evt => {
	evt.preventDefault();
	console.log('Submitted');
	const SectionID = (evt.target[0].value);
	
	const Description = (evt.target[1].value);
	const reviewObject = {
			sectionID: SectionID,
			description: Description,
		}
		console.log(reviewObject)

	ReviewsAPI.addReviews(reviewObject).then(console.table).then(history.push('/myReviews')).then(setredirect(true))
	

		

}





	
  return (
    <div>
		<h1>Leave a new Review for one of your classes here
        </h1>
		<br></br>
		<ReviewForm HandleSubmitReview= {HandleSubmitReview} UserSections={UserSections} />

<h2> Your Past Reviews! </h2>
        <ReviewList Reviews={reviews} />
    </div>
  )
}

export default MyReviewsPage



