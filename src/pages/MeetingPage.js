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

const MeetingPage = () => {
  const {notes, getNotes, comments, getComments} = useContext(MeetingContext)
  const [openPopupNotes, setOpenPopupNotes] = useState(false)
  const [openPopupComments, setOpenPopupComments] = useState(false)
  const [meetingID, setMeetingID] = useState(1)

  
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
  // console.log(comments)

  const submitCommentForm = async (formData) => {
    formData.append('meeting', meetingID)
    await CommentsAPI.newComment(formData)
    getComments()
    setOpenPopupComments(false)
  }

  return (
    <div>
      <div className='noteHeaders'>Notes</div>
      <ListGroup className='meetingList'>
      
      {notes['1'] && notes['1'].map((note, i) => {
        if (note.text) {
          return (
            <ListGroup.Item key={i}>
              <div><strong>{note.username}</strong> → {note.text}</div>
            </ListGroup.Item>
          )
        }
        return (
          <ListGroup.Item key={i}>
            <div><strong>{note.username}</strong> → <a href={note.file}>{note.description}</a></div>
          </ListGroup.Item>
        )
      })}
      </ListGroup>

      <Button onClick={handleAddNote}>add notes</Button>
      
      <div className='noteHeaders'>Comments</div>
      <div className='commentReply' onClick={() => {setOpenPopupComments('')}}>add comment</div>
      
      {comments[meetingID] && comments[meetingID].map((comment) => {
        return <CommentComponent comment={comment} setOpenPopup={setOpenPopupComments} key={comment.id}/>
        })}

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
