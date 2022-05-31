import React from 'react'
import { Link } from 'react-router-dom'
import  addIcon from '../icons/add.svg'


const AddButton = () => {
  return (
    <Link to = "/note/new" className = "floating-button">
        <img src = {addIcon}/>
    </Link>
  )
}

export default AddButton