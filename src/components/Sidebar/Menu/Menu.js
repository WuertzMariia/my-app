import React from "react";
import { NavLink } from "react-router-dom";
import c from './../Sidebar.module.css'

const Menu = (props) => {
    let sidebardata = props.sidebar.map(s => <div className={c.item}><NavLink to={s.path} activeClassName={c.activeLink}>{s.name}</NavLink></div> ); 
    return (<div className={c.sidebar}>
        {sidebardata}
        </div>
    )
} 

export default Menu;