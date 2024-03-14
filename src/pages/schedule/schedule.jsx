import React, { useState , useEffect } from 'react'
import Card from '../../components/Card/Card';
import './schedule.css'

function Schedule() {
    const filterList = [
        {
            _id:1,
            name: 'All',
            active:true,
        },
        {
            _id:2,
            name: 'Romance',
            active:false,
        },
        {
            _id:3,
            name: 'Action',
            active: false,
        },
        {
            _id:4,
            name: 'Thriller',
            active:false,
        },
        {
            _id:5,
            name: 'Horror',
            active:false,
        },
        {
            _id:6,
            name: 'Adventure',
            active:false,
        },
    ]
    const [data,setdata] = useState([]);
    const [movies,setmovies] = useState([]);
    const [filters,setfilters] = useState(filterList);
    const fetchData = () => {
        fetch("/data/movieData.json")
        .then(res=>res.json())
        .then(data=>setdata(data))
        .catch(err=>console.log(err.message))
      }
    
      useEffect(()=>{
        fetchData();
      },[])

      useEffect(()=>{
        setmovies(data)
      },[data])

      const handlefiltermovies = (category) => {
        console.log(category)
        const updatedfilters = filters.map((filter)=> ({
            ...filter,
            active: filter.name === category
        }));

        setfilters(updatedfilters);
        
        if(category === 'All'){
            setmovies(data)
        }
        else{
            const filteredmovies = data.filter(movie => movie.category === category)
            setmovies(filteredmovies)
        }

      }
  return (
    <section id='schedule' className='schedule'>
        <div className='container-fluid'>
            <div className='row'>
                <h4 className='section-title'>Opening this week</h4>
            </div>
            <div className='row '>
                <div className='filters'>
                    <p>Filters</p>
                    {
                        <ul className='filters'>
                            {
                                filters.map(filter=>(
                                    <li key={filter._id} className={`${filter.active ? 'active' : undefined}`} onClick={()=> {handlefiltermovies(filter.name);}}>{filter.name}</li>
                                ))
                            }
                        </ul>
                    }
                </div>
            </div>
            <div className='row mt-5'>
                {movies && movies.length > 0 && movies.map((movie,index)=>(
                    // <h1 key={index}>{movie.title}</h1>
                    <Card key={movie._id} movie={movie}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Schedule

// {/* <div>schedule</div> */} s s m s _id [] 0 {filter._id} '' £ setmovies *             const filteredmovies s s
