import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import Paginator from "./Paginator";
import PaginatorVersionTwo from "./PaginatorVersionTwo";

const Users = (props) => {
    let pages = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesArray = [];
    for (let i = 1; i < pages; i++) {
        pagesArray.push(i);
    }
    return (
        <div className={s.users_style}>
            <div>
                {props.usersPage.users.map(u => <div className={s.each_user}>

                    <div className={s.info_block}>
                        <div className={s.info_one}>
                            <div className={s.logo}>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img alt="users avatar" className={s.img_class}
                                             src={u.photos.small != null ? u.photos.small : userPhoto}></img>
                                    </NavLink>
                                </div>
                                {u.followed ?
                                    <button disabled={props.subscriptionProcessed.some(id => id === u.id)}
                                            className={s.btn_foll} onClick={() => {
                                        props.unsubscribe(u.id);
                                    }} type="button">Unfollow</button> :
                                    <button disabled={props.subscriptionProcessed.some(id => id === u.id)}
                                            className={s.btn_foll} onClick={() => {
                                        props.subscribe(u.id);
                                    }} type="button">Follow</button>}
                            </div>
                            <div>
                                <NavLink className={s.link_style}
                                         to={'/profile/' + u.id}>{u.name}, {u.lastname}</NavLink>
                                <div>{u.status}</div>
                            </div>


                        </div>
                        <div className={s.country_city}>{u.country} {u.city}</div>
                    </div>


                </div>)}
            </div>

            <div className={s.button_style}>
                <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                           onBtnPageClick={props.onBtnPageClick}
                           currentPage={props.currentPage}/>
            </div>
            {/* <div className={s.button_style}>
                <PaginatorVersionTwo totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onBtnPageClick={props.onBtnPageClick}
                                     currentPage={props.currentPage}/></div>*/}
        </div>
    )
}

export default Users; 