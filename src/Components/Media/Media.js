import React from 'react'
import './Media.css'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

export default function Media() {
  return (
    <div className='title'>
    <div className='press-left'>
        <Link to='/' className='homeb-button'>
          <FaHome className='homeb-icon' />
        </Link>
    </div>
      <p className='parac'>Media page work in progress</p>
    </div>
  )
}
