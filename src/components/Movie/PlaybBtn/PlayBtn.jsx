import React, { useState } from 'react'
import './PlayBtn.css'
import { FaPlay } from "react-icons/fa6";
import Modal from '../../Modal/Modal';

const PlayBtn = ({ movie }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <>
      <div className={`trailer d-flex align-items-center justify-content-center ${movie.active ? 'active' : undefined}`}>
        <a href='#' className='playBtn' onClick={toggleModal}>
          <FaPlay name='play-outline' className='icon' />
        </a>
        <p>Watch Trailer</p>
      </div>
      {movie.active && ( 
        <Modal movie={movie} status={modal} toggleModal={toggleModal}/> 
      )}
    </>
  )
}

export default PlayBtn