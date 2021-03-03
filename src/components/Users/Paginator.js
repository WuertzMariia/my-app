import React from "react";
import {totUsersCount} from "../../redux/selectors";
import s from "./Users.module.css";


let Paginator = (props) => {
    let pages = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesArray = [];
    for (let i = 1; i < pages; i++) {
        pagesArray.push(i);
    }
    return (
        <div className={s.button_style}>
            {props.currentPage === 1 ? null : <button type="button" onClick={(event) => {
                props.onBtnPageClick(1)
            }}>

                <i className="fa fa-angle-double-left" aria-hidden="true"></i></button>}
            {props.currentPage <= 1 ? null : <button type="button" onClick={(event) => {
                props.onBtnPageClick(props.currentPage - 1)
            }} className={(props.currentPage - 1) === props.currentPage && s.selected}>{props.currentPage - 1}</button>}

            <button type="button" onClick={(event) => {
                props.onBtnPageClick(props.currentPage)
            }} className={s.selected}>{props.currentPage}</button>
            {props.currentPage === pages ? null : <button type="button" onClick={(event) => {
                props.onBtnPageClick(props.currentPage + 1)
            }} className={(props.currentPage + 1) === props.currentPage && s.selected}>{props.currentPage + 1}</button>}

            {props.currentPage === pages ? null : <button type="button" onClick={(event) => {
                props.onBtnPageClick(pages)
            }}>

                <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>}
        </div>
    )
}

export default Paginator;