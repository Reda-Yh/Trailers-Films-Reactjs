import React from 'react'
import { BiSolidToTop } from "react-icons/bi";
import './BackToTopBtn.css';

const BackToTopBtn = ({ scroll }) => {
    const backToTop = () => {
        window.scrollTo(0, 0);
    }
  return (
    <p className={`back-to-top ${scroll > 100 ? 'active' : undefined}`} onClick={backToTop}>
      <div className='icon'>
        <BiSolidToTop />
      </div>
    </p>
  )
}

export default BackToTopBtn