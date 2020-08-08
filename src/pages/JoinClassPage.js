import React, { useState, useEffect } from 'react';
import AvailableSectionList from '../components/Sections/AvailableSectionList';
import ClassSectionAPI from '../API/ClassSectionAPI';
import { Redirect } from 'react-router'; 

const JoinClassPage = () => {
	
const [AvailableClasses, setAvailableClasses] = useState([{Section:'Example Section',Professor:'Mr. Example'}])

//get all of the class sections that are available. 
useEffect(() => {
	ClassSectionAPI.fetchAllClasses().then(AllClasses => {
		setAvailableClasses(AllClasses["sections"]);
	})},[]);



const Enroll = (SectionID) => {
	console.log("Ya clicked")
 return ClassSectionAPI.AddUserToSection(SectionID).then(console.table)

}




  return (
    <div>
      <h1>this is The Page where we will be able to view available class sections to join and create new classes</h1>
	  Yeah, add a search function similar to news site onchange
	  
	  {/* <h2>I have created an api endpoint to add a user to a class section on the back end</h2>
	  <h2>I have created an api endpoint to create a class section and add the current user to that class section on the back end</h2>  */}
	  <h2> Join One of the Below Classes! </h2>
        <AvailableSectionList AvailableClasses={AvailableClasses} enroll = {Enroll}/>
    </div>
  )
}

export default JoinClassPage
