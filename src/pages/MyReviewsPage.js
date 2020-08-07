import React, { useState, useEffect } from 'react'
// import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/form'
import ReviewsAPI from '../API/ReviewsAPI' 
import ClassSectionAPI from '../API/ClassSectionAPI' 
import ReviewList from '../components/Reviews/ReviewsList'
import ReviewForm from '../ReviewForm/ReviewForm'

const MyReviewsPage = () => {

//This is used for the User's already created reviews 	
const [reviews, setreviews] = useState([{id:1,User:'Michael',class_section:'Section AB345',Description: "I loved this class",Professor: "Dr. Professorson"},{id:2,User:'John',class_section:'Section TQ765',Description: "I Hated this class",Professor: "Mr. Professordaughter"},{id:1,User:'Michael',class_section:'Section AB346',Description: "I loved this class",Professor: "Dr. Professorson"},{id:2,User:'John',class_section:'Section TQ766',Description: "I Hated this class",Professor: "Mr. Professordaughter"}])

//Default Data currently
const [UserSections, setUserSections] = useState([{Section:'A1234',Professor:'Mr. Jorgenson'},{Section:'B7689',Professor:'Mrs. Jorgensonmeister'}])


//we'll fetch 
//Unauthorized until we get the token working on the front end
useEffect(() => {
ReviewsAPI.fetchReviews().then(ListOfReviews => {
	console.log("list Of Reviews Returned")
	setreviews(ListOfReviews)})
});

useEffect(() => {
	ClassSectionAPI.fetchCurrentUserClasses().then(myClassSections => {
		console.log("checking for Class Sections")
	setUserSections(myClassSections)
	})
		
	// 	setreviews(listOfSections);
	// });
});
// useEffect(() => {
	// ClassSectionAPI.fetchCurrentUserCLasses().then(listOfclasses => {
	// 	setreviews(listOfClasses);
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



