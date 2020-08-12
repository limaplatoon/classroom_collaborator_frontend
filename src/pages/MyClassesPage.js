import React, { useState, useEffect } from 'react'
import MySectionList from '../components/Sections/MySectionList';
import ClassSectionAPI from '../API/ClassSectionAPI';



const MyClassesPage = () => {
	
const [CurrentClasses, setCurrentClasses] = useState()

useEffect(() => {
	ClassSectionAPI.fetchCurrentUserClasses().then(ClassesImIn => {
		setCurrentClasses(ClassesImIn["sections"]);
	})},[]);


  return (
    <div>
	  <h1> Your Enrolled Classes! </h1>
        <MySectionList CurrentClasses={CurrentClasses} />
    </div>
  )
}

export default MyClassesPage
