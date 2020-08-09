import React, {useState, useEffect} from 'react'
import API from '../API/SectionAPI'
import Popup from 'reactjs-popup'
import ClassSectionList from '../components/ClassSectionList/ClassSectionList'
import ClassSectionForm from '../components/ClassSectionForm/ClassSectionForm'
import Button from 'react-bootstrap/Button'

const MyClasses = () => {
  const [sectionList, setSectionList] = useState([])
  const [openPopup, setOpenPopup] = useState(false)

  const loadSections = async () => {
    const response = await API.getMySections()
    const responseJson = await response.json()
    setSectionList(responseJson)
    setOpenPopup(false)
  }

  useEffect(() => {
    loadSections()
  }, [])

  const handleAddSection = async (sectionID) => {
    await API.addSectionStudents(sectionID)
    loadSections()
  }
  
  const handleDropSection = async (sectionID) => {
    await API.removeSectionStudents(sectionID)
    loadSections()
  }

  const handlePopupClose = () => {
    setOpenPopup(false)
  }
  

  return (
    <div>
      <ClassSectionList sectionList={sectionList} handleDropSection={handleDropSection} />
      <Popup
        open={openPopup}
        closeOnDocumentClick={false}
        onClose={handlePopupClose}
      >
        <ClassSectionForm 
          addSection={handleAddSection}
          closePopup={handlePopupClose}
        />
      </Popup>
      <br />
      <Button onClick={() => setOpenPopup(true)}>Add Section</Button>
    </div>
  )
}

export default MyClasses
