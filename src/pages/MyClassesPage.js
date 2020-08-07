import React, { useState } from 'react'
import MySectionList from '../components/Sections/MySectionList'
const MyClassesPage = () => {
	
const [CurrentClasses, setCurrentClasses] = useState([{'Section':'A1234','Professor':'Mr. Jorgenson'},{'Section':'B7689','Professor':'Mrs. Jorgensonmeister'}])

// useEffect(() => {
	// ClassSectionAPI.fetchCurrentUserCasses().then(listOfclasses => {
	// 	setreviews(listOfClasses);
	// });


  return (
    <div>
	  <h2> Your Enrolled Classes! </h2>
	  add links to each of these to the main calendar view for each class
        <MySectionList CurrentClasses={CurrentClasses} />
    </div>
  )
}

export default MyClassesPage
