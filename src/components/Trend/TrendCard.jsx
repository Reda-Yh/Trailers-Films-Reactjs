import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import './TrendCard.css';

const TrendCard = ({ slide }) => {
  return (
    <div className='trend-card'>
        <img className='img-fluid' src={slide.previewImg} />
        <a href='#'>
            Add to calendar <FaCalendarAlt />
        </a>
    </div>
  )
}

export default TrendCard