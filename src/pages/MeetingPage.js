import React, {useContext, useEffect, useState} from 'react'
import { MeetingContext } from '../context/MeetingContext'
import ListGroup from 'react-bootstrap/ListGroup'
import CommentComponent from '../components/CommentComponent/CommentsComponent' 
import CommentForm from '../components/CommentForm/CommetForm' 
import NoteForm from '../components/NoteForm/NoteForm'
import Button from 'react-bootstrap/Button'
import Popup from 'reactjs-popup'
import NotesAPI from '../API/NotesAPI'
import CommentsAPI from '../API/CommentsAPI'
import './MeetingsPage.css'

const getBaseName = (path) => {
  const splitPath = path.split('/')
  return splitPath[splitPath.length-1]
}

const MeetingPage = (props) => {
  const {history} = props
  const meetingID = props.match.params.meetingID

  const {notes, getNotes, comments, getComments} = useContext(MeetingContext)
  const [openPopupNotes, setOpenPopupNotes] = useState(false)
  const [openPopupComments, setOpenPopupComments] = useState(false)

  
  const loadDetails = async () => {
    await getNotes()
    await getComments()
  }

  useEffect(() => {
    loadDetails()
  }, [])

  const handleAddNote = () => {
    setOpenPopupNotes(true)
  }

  const handlePopupNotesClose = () => {
    setOpenPopupNotes(false)
  }

  const handlePopupCommentsClose = () => {
    setOpenPopupComments(false)
  }

  const submitNoteForm = async (formData) => {
    formData.append('meeting', meetingID)
    await NotesAPI.newNotes(formData)
    getNotes()
    setOpenPopupNotes(false)
  }

  const submitCommentForm = async (formData) => {
    formData.append('meeting', meetingID)
    await CommentsAPI.newComment(formData)
    getComments()
    setOpenPopupComments(false)
  }

  return (
    <div style={{marginBlock: '50px'}}>
      <div>
        <div className='noteHeaders'>Notes</div>
        <ListGroup className='meetingList' style={{marginBlock: '10px'}}>
        
        {notes[meetingID] && notes[meetingID].map((note, i) => {
          if (note.text) {
            return (
              <ListGroup.Item key={i}>
                <div><strong>{note.username}</strong> → {note.text}</div>
              </ListGroup.Item>
            )
          }
          return (
            <ListGroup.Item key={i}>
              <div><strong>{note.username}</strong> → <a href={note.file}>{getBaseName(note.file)}</a></div>
            </ListGroup.Item>
          )
        })}
        </ListGroup>

        <Button onClick={handleAddNote}>add notes</Button>
      </div>

      <div style={{marginBlock: '50px'}}>
        <div className='noteHeaders'>Comments</div>
        <div className='commentReply' onClick={() => {setOpenPopupComments('')}}>add comment</div>
        
        {comments[meetingID] && comments[meetingID].map((comment) => {
          return <CommentComponent comment={comment} setOpenPopup={setOpenPopupComments} key={comment.id}/>
          })}
      </div>

      <Popup
        open={openPopupNotes}
        closeOnDocumentClick={false}
        onClose={handlePopupNotesClose}
      >
        <NoteForm
          closePopup={handlePopupNotesClose}
          submitForm={submitNoteForm}
        />
      </Popup>

      <Popup
        open={(openPopupComments !== false)}
        closeOnDocumentClick={false}
        onClose={handlePopupNotesClose}
      >
        <CommentForm 
          submitForm={submitCommentForm} 
          parentID={openPopupComments}
          closePopup={handlePopupCommentsClose}
        />
      </Popup>


    </div>
  )
}

export default MeetingPage
