import React, {useState} from "react";
import Preloader from "../../Preloader/Preloader";
import c from './ProfileInfo.module.css'
import ProfileStatusWithHook from "./ProfileStatusHook";
import userPhoto from "../../../assets/images/user.png";
import {ProfileForm} from "./ProfileInfoForm";


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    let activEditMode = () => {
        setEditMode(true);
    }
    let deactivEditMode = (values) => {
        setEditMode(false);
        props.setProfileData(values);
    }

    const uploadFoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    if (!props.profile) {
        return <Preloader/>
    }

    return <div className={c.main}>
        <h4>{props.profile.fullName}</h4>
        <ProfileStatusWithHook status={props.status} updateUserStatus={props.updateUserStatus}/>
        <div><img style={{width: "15%"}} title="userPhoto" alt="userPhoto"
                  src={props.profile.photos.small || userPhoto}/></div>
        {props.isOwner &&
        <div><label htmlFor={"file"}><p className={c.btn}>Upload new photo</p></label>
            <input type={"file"} id={"file"} name={"file"} onChange={uploadFoto}/></div>}

        {!editMode ? <ProfileOfMainUser activEditMode={activEditMode} isOwner={props.isOwner}
                                        profile={props.profile}/>
            : <ProfileForm userId={props.userId} deactivEditMode={deactivEditMode} isOwner={props.isOwner}
                           profile={props.profile}/>
        }
    </div>
}

export default ProfileInfo;


const ProfileOfMainUser = (props) => {
    return (
        <div>

            <div>
                {props.profile.lookingForAJob && <p>I am open to work! Please feel free to contact me</p>}
                <p>My job preferences: {props.profile.lookingForAJobDescription}</p>
                <p>About me: {props.profile.aboutMe}</p>
                <p>My dream job: {props.profile.lookingForAJobDescription}</p>
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
                {props.isOwner && <button onClick={props.activEditMode}>edit</button>}
            </div>
        </div>
    )
}