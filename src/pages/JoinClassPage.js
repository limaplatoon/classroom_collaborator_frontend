import React, { useState, useEffect } from 'react';
import AvailableSectionList from '../components/Sections/AvailableSectionList';
import ClassSectionAPI from '../API/ClassSectionAPI';
import { Redirect } from 'react-router'; 
import { useHistory } from "react-router-dom";
import SectionForm from '../SectionForm/SectionForm';


const JoinClassPage = () => {
	
const [AvailableClasses, setAvailableClasses] = useState([{Section:'Turn On The Back End',Professor:'Please'}])

let history = useHistory();

//get all of the class sections that are available. 
useEffect(() => {
	ClassSectionAPI.fetchAllClasses().then(AllClasses => {
		setAvailableClasses(AllClasses["sections"]);
	})},[]);


const HandleSubmitNewSection = evt => {
		evt.preventDefault();
		console.log('Submitted');
		const SectionName = (evt.target[1].value);
		
		const ProfLastName = (evt.target[0].value);
		const SectionObject = {
				Section: SectionName,
				ProfessorLastName: ProfLastName,
			}
		ClassSectionAPI.addSection(SectionObject).then(history.push('/myClasses'))
}


const Enroll = (SectionID) => {

 return ClassSectionAPI.AddUserToSection(SectionID).then(history.push('/myClasses'))


}




  return (
    <div>
      <h1>If your class section can't be found below, create a new one! </h1>
	 <SectionForm HandleSubmitNewSection={HandleSubmitNewSection}/>
	  <h2> Join One of the Below Classes! </h2>
	  <h4>Yeah, add a search function similar to news site onchange</h4>
        <AvailableSectionList AvailableClasses={AvailableClasses} enroll = {Enroll}/>
    </div>
  )
}

export default JoinClassPage
