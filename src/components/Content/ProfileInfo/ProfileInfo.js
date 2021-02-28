import React from "react";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import c from './ProfileInfo.module.css'
import ProfileStatusWithHook from "./ProfileStatusHook";


const ProfileInfo = (props) => {


    if(!props.profile) {
        return <Preloader />
    }
    let loogking_for_a_job = (status) => {
    return (props.profile.lookingForAJob) ? null : null; 
    } 
    
    return <div className={c.main}>
        {/* <img className={c.imgClass} src="https://kidpassage.com/images/publications/tenerife-v-mae-k-teplyim-beregam/tenerife-mae-otdyh-pogoda-1_1063346845.jpg"></img> */}
        <div>{props.profile.fullName}</div>
        <div><img style={{width:"15%"}} title="userPhoto" alt="userPhoto" src={props.profile.photos.small} /></div>
        {/*Status*/}
       

        <ProfileStatusWithHook status={props.status} updateUserStatus={props.updateUserStatus}/>
        <div>{props.profile.aboutMe}</div>
        <div>
            <span>{loogking_for_a_job()}</span>
            <span>{props.profile.lookingForAJobDescription}</span>
        </div>
        <div>
            <h5>Contacts</h5>
            <ul>
                
                <li>Facebook: {props.profile.contacts.facebook}</li>
                <li>Github: {props.profile.contacts.github}</li>
                <li>Instagram: {props.profile.contacts.instagram}</li>
                <li>MainLink: {props.profile.contacts.mainLink}</li>
                <li>Twitter: {props.profile.contacts.twitter}</li>
                <li>VK: {props.profile.contacts.vk}</li>
                <li>Website: {props.profile.contacts.website}</li>
                <li>Youtube: {props.profile.contacts.youtube}</li>
            </ul>
        </div>
        </div>
}

export default ProfileInfo;