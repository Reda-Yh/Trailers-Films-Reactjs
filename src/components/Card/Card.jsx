import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import './Card.css'

const Card = ({ movie }) => {
  return (
    <div className='col-lg-2 col-md-4 col-sm-6'>
        <div className='movie-card'>
            <img src={movie.previewImg} alt='Preview Image' className='img-fluid' />
            <p>
                {movie.length} | {movie.category}
            </p>
            <div className='content'>
                <h4>{movie.title}</h4>
                <div className='card-icons'>
                    <IoMdAdd className='icon'/>
                    <FaPlay className='icon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card