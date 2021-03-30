import React, {useState, useEffect} from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status] )

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = ()=> {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <b>Status: </b><span onDoubleClick = {activateEditMode}>{ props.status || 'set a status message'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange = {onStatusChange}
                           onBlur = {deactivateEditMode}
                           autoFocus = {true}
                           type = "text"
                           value = {status} />
                </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;