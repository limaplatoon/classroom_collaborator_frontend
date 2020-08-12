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
		const SectionID = (evt.target[1].value);
		const ProfLastName = (evt.target[0].value);
		const Name = (evt.target[2].value);

		const SectionObject = {
				Section: SectionID,
				ProfessorLastName: ProfLastName,
				SectionName: Name
			}
		ClassSectionAPI.addSection(SectionObject).then((responseRCVD => {
			history.push('/myClasses')
		}))
}


const Enroll = (SectionID) => {

 return ClassSectionAPI.AddUserToSection(SectionID).then(responseRCVD => {
	 console.log(responseRCVD)
	 history.push('/myClasses')
 })
}




  return (
    <div>
      <h1>If your class section can't be found below, create a new one! </h1>
	 <SectionForm HandleSubmitNewSection={HandleSubmitNewSection}/>
	  <h2> Join One of the Below Classes! </h2>
        <AvailableSectionList AvailableClasses={AvailableClasses} enroll = {Enroll}/>
    </div>
  )
}

export default JoinClassPage
