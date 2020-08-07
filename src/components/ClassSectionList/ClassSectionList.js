import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import './ClassSectionList.css'

const ClassSectionList = ({sectionList}) => {
  return (
    <div>
      <ListGroup>
        {sectionList.map((section, i) => 
          <ListGroup.Item 
            className='classSectionItem'
            // onClick={() => handleRemoveFile(i)}
            key={i}
          >
            {section.name}
          </ListGroup.Item>
        )}
      </ListGroup>
    </div>
  )
}

export default ClassSectionList
