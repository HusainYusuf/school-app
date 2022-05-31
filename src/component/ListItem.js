import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (note) => {
  return new Date(note.updated).toLocaleDateString()
}


let getHeader = (note) => {
  let header = note.body.split('\n')[0]
  if(header.length > 40) {
    return header.slice(0, 40)
  } 
  return header
}

let getContent = (note) => {
  let header = getHeader(note)
  let body = note.body.replaceAll('\n', ' ')
  body = body.replaceAll(header, '')

  if(body.length > 40) {
    return body.slice(0, 40) + "..."
  }else{
    return body
  }


}

const ListItem = ({note}) => {
  return (
    <Link to ={`/note/${note.id}`}>
      <div className= "notes-list-item">
        <h3>{getHeader(note)}</h3>
        <p><span>{getTime(note)}</span></p>
      </div>
    </Link>
  )
}

export default ListItem