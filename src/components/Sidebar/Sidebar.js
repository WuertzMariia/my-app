import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import Menu from "./Menu/Menu";
import c from './Sidebar.module.css'

const Sidebar = (props) => {

    return (<div className={c.sidebar}>
        <Menu sidebar={props.state.sidebarPage.sideb}/>
       <Friends friends={props.state.sidebarPage.friends}/>
        </div>
    )
}

export default Sidebar;