import React, {useState, useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import './DropZone.css'

const DropZone = (props) => {
  const [dropBackground, setBackground] = useState('#f3f1f1')
  const [dropText, setDropText] = useState('Drag & Drop File(s) Here')
  const [fileList, setFileList] = useState([])

  const dragEnter = (event) => {
    event.preventDefault();
    setBackground('#e4f5ff')
    setDropText('Drop File(s)')
  }

  const dragLeave = (event) => {
    event.preventDefault();
    setBackground('#f3f1f1')
    setDropText('Drag & Drop File(s) Here')
  }

  const handleFileDrop = (event) => {
    event.preventDefault()
    const files = event.dataTransfer.files
    setFileList(prevList => {
      const currentNames = prevList.map(file => file.name)
      return [...prevList].concat([...files].filter((file) => currentNames.indexOf(file.name) === -1))
    });
    setBackground('#f3f1f1')
    setDropText('Drag & Drop File(s) Here')
  }

  const handleRemoveFile = (index) => {
    setFileList(prevList => prevList.filter((file, i) => i !== index))
  }

  useEffect(() => {
    props.setFileList([...fileList])
  }, [fileList])

  return (
    (fileList.length === 0)
      ? <div 
          className='dropContainer' 
          style={{backgroundColor: dropBackground}}
          onDragOver={dragEnter}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={handleFileDrop}
          >
            {dropText}
        </div>
      : <ListGroup>
          {fileList.map((file, i) => 
            <ListGroup.Item 
              className='fileItem'
              onClick={() => handleRemoveFile(i)}
              key={i}
            >
              {file.name}
            </ListGroup.Item>
          )}
        </ListGroup>
  )
}

export default DropZone