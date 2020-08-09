import React from 'react'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import API from '../../API/SectionAPI'
import './ClassSectionList.css'


const ClassSectionList = ({sectionList, handleDropSection}) => {

  return (
    <div>
      <ListGroup>
        {sectionList.map((section, i) => 
          <ListGroup.Item className='classSectionItemMain' key={i} >
            <div className='classSectionItem'>
              <Link to='#'>
              {section.Section} - {section.professor_first_name} {section.professor_last_name}</Link>
              <Button onClick={() => handleDropSection(section.id)}>drop</Button>
            </div>
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  )
}

export default ClassSectionList
