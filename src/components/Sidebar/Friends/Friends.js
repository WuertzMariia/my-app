import React from "react";
import { NavLink } from "react-router-dom";
import c from './../Sidebar.module.css'
import s from './Friends.module.css'

const Friends = (props) => {


let friendsdata = props.friends.map( f => <div>
    <img className={s.imageClass} src={f.src}>
    </img>
    <NavLink to="/#">{f.name}</NavLink>
</div>)


    return <div className={c.sidebar_friends}>
        
    <h2>Friends</h2>
    <div className={s.friendsblock}>
        {friendsdata}
        </div>
    
</div>

      
    
}

export default Friends;