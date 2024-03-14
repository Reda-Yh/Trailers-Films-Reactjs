import React from 'react'
import './NavListItem.css'

function NavListItem({ nav, navOnClick }) {
    return (
        <li>
            <a href={nav.link} className={`${nav.active ? 'active' : undefined}`} onClick={() => { navOnClick(nav.id); }}>
                {nav.name}
            </a>
        </li>
    )
}

export default NavListItem;


// * Home "#" 