import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";

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
                            <div className={s.logo}><div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img alt="users avatar" className={s.img_class} src={u.photos.small != null ? u.photos.small : userPhoto}></img>
                                </NavLink>
                            </div>
                                {u.followed ?
                                    <button disabled={props.subscriptionProcessed.some(id => id===u.id) } className={s.btn_foll} onClick={() => {
                                        props.unsubscribe(u.id);}} type="button">Unfollow</button> :
                                    <button disabled={props.subscriptionProcessed.some(id => id===u.id) } className={s.btn_foll} onClick={() => {
                                        props.subscribe(u.id);}} type="button">Follow</button>}
                            </div>
                            <div>
                                <NavLink className={s.link_style} to={'/profile/' + u.id}>{u.name}, {u.lastname}</NavLink>
                                <div>{u.status}</div>
                            </div>


                        </div>
                        <div className={s.country_city}>{u.country} {u.city}</div>
                    </div>



                </div>)}
            </div>
            <div className={s.button_style}>

                {/* 
                   { pagesArray.map(p => {
                         return  <button type="button" onClick={(event) => {this.onBtnPageClick(p)}} className={p === this.props.currentPage && s.selected} >{p}</button>
                        
                    })} */}
                {props.currentPage <=1 ? null :  <button type="button" onClick={(event) => { props.onBtnPageClick(props.currentPage - 1) }} className={(props.currentPage - 1) === props.currentPage && s.selected} >{props.currentPage - 1}</button> }

                <button type="button" onClick={(event) => { props.onBtnPageClick(props.currentPage) }} className={s.selected} >{props.currentPage}</button>
                <button type="button" onClick={(event) => { props.onBtnPageClick(props.currentPage + 1) }} className={(props.currentPage + 1) === props.currentPage && s.selected} >{props.currentPage + 1}</button>

                <button type="button" onClick={(event) => { props.onBtnPageClick(pagesArray[pagesArray.length - 1]) }} className={(pagesArray[pagesArray.length - 1]) === props.currentPage && s.selected} >

                    <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}

export default Users; 