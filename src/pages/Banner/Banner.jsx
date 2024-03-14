import React, {useState , useEffect} from 'react'
import './Banner.css'
// import '../assets/'
import Bgimg from './bg-transformer.jpg'
import Bgimg2 from './transformer-title.png'
import { IoPlayOutline } from "react-icons/io5";
import MovieContent from '../../components/Movie/Content/MovieContent';
import MovieDate from '../../components/Movie/Date/MovieDate';

import MovieSwiper from '../../components/Movie/Swiper/MovieSwiper';
import PlayBtn from '../../components/Movie/PlaybBtn/PlayBtn';


function Banner() {
  const [movies,setmovies] = useState([])
  const fetchData = () => {
    fetch("/data/movieData.json")
    .then(res=>res.json())
    .then(data=>setmovies(data))
    .catch(err=>console.log(err.message))
  }

  useEffect(()=>{
    fetchData();
  },[])

  const handleSlideChange = (id) =>{
    console.log(id)
    const newMovies = movies.map((movie)=>{
      movie.active =false
      if(movie._id === id){
          movie.active = true
      }
      return movie;
    })
    setmovies(newMovies);
  }
  return (
    <div className='banner'>
      {
        movies && movies.length > 0 && movies.map(movie=>(
          <div className='movie'>
          <img src={movie.bgImg} alt="" className={`bgImg ${movie.active ? 'active' : undefined}`}/>*
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6 col-md-12'>
                <MovieContent movie={movie}/>
              </div>
              <div className='col-lg-6 col-md-12'>
                <MovieDate movie={movie}/>
                <PlayBtn movie={movie}/>
              </div>
            </div>
          </div>
        </div>  
        ))
      }

      {movies && movies.length > 0 && <MovieSwiper slides={movies} slideChange={handleSlideChange}/>  }    
    </div>
  )
}

export default Banner

// {/* <div>Banner</div> */} r x "<p></p> <Trailer></Trailer> a y B <" && console.log('reda') active < Bgimg 'bgImg ' { } ( )
