import React, { useEffect, useState } from 'react'
import NavListItem from './NavListItem';
import navListData from './NavListData';
import './header.css'
import Search from '../search/search';
import Button from '../Movie/Content/Button';
import { GrLogin } from "react-icons/gr";


function Header({ scroll }) {
    const [navList, setNavList] = useState(navListData);

    const handleNavOnClick = id => {
        const newNavList = navList.map(nav => {
            nav.active = false;
            if(nav.id === id) nav.active = true;
            return nav;
        });
        setNavList(newNavList)
    }

    // const handleNavOnClick = id => {
    //     const newNavList = navList.map(nav => ({
    //         ...nav,
    //         active: nav.id === id
    //     }));
    //     setNavList(newNavList);
    // }    

    useEffect(() => {console.log(navList)}, [navList])
    return(
        <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
            <a href='/' className='Logo'>
                Cinema
            </a>
            <ul className='nav'>
            {
                navList.map( (nav) => (
                        <NavListItem key={nav.id} nav={nav} navOnClick={handleNavOnClick} />
                        ))
            }
            </ul>

            <Search />

            <Button icon={<GrLogin />} name='Sign in'/>
        </header>
    )
}

export default Header;

// {/* <NavListItem name="Home"/> */} {} {}