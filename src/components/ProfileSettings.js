import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AddPicture, AddInfo } from '../actions/ProfileActions';

function ProfileSettings() {

    const dispatch = useDispatch();
    const profileInfo = useSelector(state => state.profileInfo);

    const[image, setImage] = useState('');
    const[info, setInfo] = useState({
        first: profileInfo.first,
        last: profileInfo.last
    })
    const[error, setError] = useState('');
    const[success, setSuccess] = useState('');

    const cloudName = 'dqrwsyemc'; // cloud name for cloudinary

    const uploadImage = (e) => {
        e.preventDefault();

        if (image !== '') {
            const data = new FormData();
            data.append('file', image);
            data.append('upload_preset', 'awuasjzy');
    
            axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, data)
                .then((res) => {
                    console.log(res.data);
                    dispatch(AddPicture(res.data.secure_url));
                });
        }

            if (info.first !== '' && info.last !== '') {
                // dispatch
                dispatch(AddInfo(info));
            }
            else {
                setSuccess('');
                setError('Please fill in the required fields.');
                return;
            }

            setSuccess('Profile information updated.');
            setError('');
            setImage('');

            setTimeout(() => {
                setSuccess('');
            }, 1500)
    }

  return (
    <div className='profile-settings'>
        <h3 className='section-title'>Profile Settings</h3>
        
        <form>
            <div className="user-input" onChange={(e) => setInfo({
                ...info,
                first: e.target.value
            })}>
                <label htmlFor="name">First Name:</label>
                <input type="text" name='name' defaultValue={profileInfo.first} />
            </div>

            <div className="user-input" onChange={(e) => setInfo({
                ...info,
                last: e.target.value
            })}>
                <label htmlFor="surname">Last Name:</label>
                <input type="text" name='surname' defaultValue={profileInfo.last} />
            </div>

            <div className="user-input profile-input">
                <label htmlFor="photo">Profile Picture:</label>
                <input type="file" name='photo' onChange={(e) => setImage(e.target.files[0])} />
            </div>

            <button onClick={(e) => uploadImage(e)}>Save</button>

            <h4>{ error }</h4>
            <h4>{ success }</h4>
        </form>
    </div>
  )
}

export default ProfileSettings