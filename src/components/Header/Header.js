import React from "react";
import { NavLink } from "react-router-dom";
import c from './Header.module.css'


const Header = (props) => {

    return <div className={c.header}>

        <div className={c.block1}><img src="https://lh3.googleusercontent.com/proxy/eGrHgKObTs56rItOYmymkU6tji5I3SwjDKVPy5ImpfmFbvK2yjcNchGb4ncAu-SS2JGwsP5v_zCL1bOf6jmcRHIdnFPlTkh12I2TdSuTZPQ-NPbZBCOYJ8C-pDda-XsesonEGiqGAq305R2QkwQ"></img></div>
    <div className={c.block2}>
        {props.isAuthorized ?<div><p>Logged in as {props.login} <button onClick={props.singOutLogin}>Sign Out</button> </p></div> :<NavLink className={c.linkstyle} to="/login">Login</NavLink>}
        </div>
    
    </div>
}

export default Header;