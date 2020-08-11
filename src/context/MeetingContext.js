import React, {createContext, useState} from 'react'
import ClassMeetingAPI from "../API/ClassMeetingAPI"

export const MeetingContext = createContext()

const MeetingContextProvider = (props) => {
  const [notes, setNotes] = useState({})
  const [comments, setComments] = useState({})

  const getUserMeetings = async () => {
    const response = await ClassMeetingAPI.getUserMeetings()
    const responseJson = await response.json()
    const meetingIDs = await responseJson.map((meeting) => meeting.id)
    return meetingIDs
  }

  const loadNotes = async (meetingID) => {
    const response = await ClassMeetingAPI.getMeetingNotes(meetingID)
    const responseJson = await response.json()
    return responseJson
  }

  const getNotes = async () => {
    const newNotes = {}
    const meetingIDs = await getUserMeetings()
    for (let index in meetingIDs) {
      let meetingID = meetingIDs[index]
      newNotes[meetingID] = await loadNotes(meetingID)
    }
    setNotes(newNotes)
  }

  const loadComments = async (meetingID) => {
    const response = await ClassMeetingAPI.getMeetingComments(meetingID)
    const responseJson = await response.json()
    return responseJson
  }

  const getComments = async () => {
    const newComments = {}
    const meetingIDs = await getUserMeetings()
    for (let index in meetingIDs) {
      let meetingID = meetingIDs[index]
      newComments[meetingID] = await loadComments(meetingID)
    }
    setComments(newComments)
  }

  return (
    <MeetingContext.Provider value={{notes, getNotes, comments, getComments}}>
      {props.children}
    </MeetingContext.Provider>
  )
}

export default MeetingContextProvider
