import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import  leftArrow from '../icons/chevron-left.svg'
import { useNavigate } from "react-router-dom";

const NotePage = () => {
   const {id} = useParams();
   let [note, setNote] = useState(null)
   const navigate = useNavigate()


   useEffect(() => {
      getNote()
   },[id])

   let getNote = async() => {
    if (id === 'new') return

     let response = await fetch(`/api/notes/${id}`)
     let data = await response.json()
     setNote(data)
   }

   let updateNote = async() => {
     fetch(`/api/notes/${id}/update/`, {
      method: "PUT", 
      headers: {
          'Content-Type' : 'application/json'
      },
      body: JSON.stringify(note)

     }) 
   }

   let createNote = async() => {
    fetch(`/api/notes/create/`, {
     method: "POST", 
     headers: {
         'Content-Type' : 'application/json'
     },
     body: JSON.stringify(note)

    }) 
  }

   let deleteNote = async () => {
     fetch(`/api/notes/${id}/delete/`, {
      method: "DELETE", 
      headers: {
          'Content-Type' : 'application/json'
      }
   })
      navigate({ pathname: '/' }) 
  }

   let handleSubmit = () => {
      if(id !== 'new' && note.body == '') {
        deleteNote()
      } else if(id !== 'new'){
        updateNote()
      }else if(id === 'new' && note.body != null){
        createNote()
      }
      navigate({ pathname: '/' }) 
   }

   let handleDelete = (value) => {
     setNote(note => ({...note, 'body': value}))
   }

  return (
    
    <div className= "note">
        <div className= "note-header">
          <h3>
              <img src = {leftArrow} onClick = {handleSubmit}/>
          </h3>
          {id !== 'new' ? (
            <button onClick = {deleteNote}>Delete</button>
          ): (
            <button onClick = {handleSubmit}>Done</button>
          )}
        </div>
       <textarea onChange = {(e) => {handleDelete(e.target.value)}} value ={note?.body}></textarea>
    </div>

  )
}

export default NotePage

