import React from 'react'
import './FooterNavItem.css'
import { FaAngleRight } from "react-icons/fa";

const FooterNavItem = ({ name }) => {
  return (
    <li>
       <FaAngleRight className='icon' />{" "}
       <a href='#'>{name}</a> 
    </li>
  )
}

export default FooterNavItem