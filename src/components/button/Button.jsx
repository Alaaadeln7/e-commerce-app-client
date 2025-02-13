import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <Link to='/shop' className='btn-one'>shop now</Link>
  )
}

export default Button
