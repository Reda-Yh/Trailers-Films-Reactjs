import React from 'react';
import './MovieContent.css';
import Button from './Button';
import { CiBookmark } from "react-icons/ci";
import { CgPlayListAdd } from "react-icons/cg";

function MovieContent({ movie }) {
  return(
    <div className={`content ${movie.active ? 'active' : undefined}`}>
      <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
      <h4>
        <span>{movie.year}</span>
        <span>
          <i>{movie.ageLimit}</i>
        </span>
        <span>{movie.lenght}</span>
        <span>{movie.category}</span>
        </h4>
      <p>
        {movie.description}
      </p>
      <div className="button">
        <Button icon={<CiBookmark />} name="Book" color="#ff3700" bgColor="#ffffff" />
        <Button icon={<CgPlayListAdd />} name="My List" />
      </div>
    </div>
  )
}

export default MovieContent;