import React, { useState } from 'react'
import SectionList from '../components/Sections/SectionList'
const MyClassesPage = () => {
	
const [CurrentClasses, setCurrentClasses] = useState([{'Section':'A1234','Professor':'Mr. Jorgenson'},{'Section':'B7689','Professor':'Mrs. Jorgensonmeister'}])

// useEffect(() => {
	// ClassSectionAPI.fetchCurrentUserCasses().then(listOfclasses => {
	// 	setreviews(listOfClasses);
	// });


  return (
    <div>

   
	
      <h1>this is The Page where we will be able to view available class sections to join and create new classes</h1>
	  <h2>I have created an api endpoint to add a user to a class section on the back end</h2>
	  <h2>I have created an api endpoint to create a class section and add the current user to that class section on the back end</h2>
	  <h1> See the classes that you're in </h1> 
	  <h2> Your Enrolled Classes! </h2>
        <SectionList CurrentClasses={CurrentClasses} />
    </div>
  )
}

export default MyClassesPage
