import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 JSM Headphones All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram />
        <FaTiktok />
      </p>

    </div>


  )
}


export default Footer