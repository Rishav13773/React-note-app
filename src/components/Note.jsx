import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

function Note({ id, text, date, handleDeleteNote }) {

  const deleteNote =()=>{
    handleDeleteNote(id);
  }
  return (
    <div className='note'>
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever onClick={deleteNote} className = 'delete-icon' />
        </div>
    </div>
  )
}

export default Note