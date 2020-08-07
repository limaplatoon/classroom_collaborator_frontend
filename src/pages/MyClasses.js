import React, {useState, useEffect} from 'react'
import API from '../API/SectionAPI'
import ClassSectionList from '../components/ClassSectionList/ClassSectionList'
import ClassSectionForm from '../components/ClassSectionForm/ClassSectionForm'

const classSectionList = [
  {
    id: 1,
    name: 'Art 100',
  },
  {
    id: 2,
    name: 'Physics 200',
  }
]

const MyClasses = () => {
  const [sectionList, setSectionList] = useState([])

  const loadSections = async () => {
    const response = await API.getMySections()
    const responseJson = await response.json()
  
    setSectionList(responseJson.sections)
  }

  useEffect(() => {
    loadSections()
  }, [])

  const handleAddSection = () => {

  }

  return (
    <div>
      <ClassSectionList sectionList={sectionList}/>
      <hr/>
      <ClassSectionForm addSection={handleAddSection}/>
      <br />
    </div>
  )
}

export default MyClasses
