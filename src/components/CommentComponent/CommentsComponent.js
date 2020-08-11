import React from 'react'
import './CommentComponent.css'

const CommentComponent = ({comment, setOpenPopup}) => {
  const nestedComments = (comment.comments || []).map(comment => {
    return <CommentComponent comment={comment} setOpenPopup={setOpenPopup} key={comment.id}/>
  })

  return (
    <div style={{display: 'flex', justifyContent: 'flex-start'}} className='commentContainer' key={comment.id}>
      <div>
        ↳
      </div>
      <div>
        <div style={{display: 'flex', justifyContent: 'flex-start'}} >
          <div>
            <div className='commentText'>{comment.content}</div>
            <div className='commentAuthor'>{comment.username}</div>
          </div>
          <div className='commentReply' onClick={() => {setOpenPopup(comment.id)}}>reply</div>
        </div>
        {nestedComments}
      </div>
    </div>
  )
}

export default CommentComponent
