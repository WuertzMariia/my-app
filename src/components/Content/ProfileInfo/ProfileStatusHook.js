import React, {useState} from 'react';
import c from './ProfileStatus.module.css'

const ProfileStatusWithHook = (props) => {

 let [editMode, setEditMode] = useState(false);
 let [status, setStatus] = useState(props.status);
    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    let handleKey = (e) =>  {
        if(e.charCode === 13 || e.keyCode === 13) {

            deactivateEditMode();
        }
    }
    let updateInputArea =(e) => {

       setStatus(e.target.value)
    }


   {
       return( <div className={c.main}>
           {!editMode ?  <div> <p onDoubleClick={activateEditMode}>{props.status  || "Enter your status"}</p>
        </div>: 
        <div><p><input onChange={updateInputArea} autoFocus="true" onKeyPress={handleKey} onBlur={deactivateEditMode}
        type="text" maxlength="300" value={status}/></p></div>
    }


    
    </div>)}
}

export default ProfileStatusWithHook;