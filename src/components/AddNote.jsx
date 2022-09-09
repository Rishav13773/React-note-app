import React from 'react'
import {useState} from 'react'

function AddNote({ handleAddNote }) {
    const [text, setText] = useState('');
    const characterLimit = 200;

    const handleChange = (e)=>{
        if(characterLimit - e.target.value.length >=0){
            setText(e.target.value);
        }
    };
    
    const handleClick = ()=>{
        if(text.trim().length > 0){
            handleAddNote(text);
            setText('')
        }
    };
    return (
        <div className='note new'>
            <textarea
                onChange={handleChange} 
                cols="8" 
                rows="10"
                value={text} 
                placeholder='Type here to add note...'>
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - text.length}</small>
                <button onClick={handleClick} className='save'>Save</button>
            </div>
        </div>
    )
}

export default AddNote