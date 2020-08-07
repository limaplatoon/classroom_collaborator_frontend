import React, { useState } from 'react'
import AvailableSectionList from '../components/Sections/AvailableSectionList'
const JoinClassPage = () => {
	
const [AvailableClasses, setAvailableClasses] = useState([{'Section':'A1234','Professor':'Mr. Jorgenson'},{'Section':'B7689','Professor':'Mrs. Jorgensonmeister'},{'Section':'J9653','Professor':'Prof. Smith'}])

// useEffect(() => {
	// ClassSectionAPI.fetchCurrentUserCasses().then(listOfclasses => {
	// 	setreviews(listOfClasses);
	// });


  return (
    <div>
      <h1>this is The Page where we will be able to view available class sections to join and create new classes</h1>
	  Yeah, add a search function similar to news site onchange
	  
	  {/* <h2>I have created an api endpoint to add a user to a class section on the back end</h2>
	  <h2>I have created an api endpoint to create a class section and add the current user to that class section on the back end</h2>  */}
	  <h2> Join One of the Below Classes! </h2>
        <AvailableSectionList AvailableClasses={AvailableClasses} />
    </div>
  )
}

export default JoinClassPage
