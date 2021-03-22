import React from 'react'
import noImg from '../../assets/no-image-icon.png'
import './ProfileDashboard.css'

export default function ProfileDashboard({values, editUser}) {
    return (
        <div className="container profile-main">
            <p className='header-profile'>Dane kontaktowe</p>
            <div className='profile-container'>
                <div className='img-profile'>
                    <img src={values.avatar ? `https://limitless-reaches-05484.herokuapp.com/files/${values.avatar}` : noImg}
                         className="img-fluid img-profile-dashboard" alt="użytkownik"/>
                </div>
                <div className="helper-edit">
                    <div className='values-edit'>
                        <label>Nazwa firmy</label>
                        <p>{values.nickname}</p>
                    </div>
                    <div className='values-edit'>
                        <label>Telefon</label>
                        <p>{values.phone}</p>
                    </div>
                    <div className='values-edit'>
                        <label>E-mail</label>
                        <p>{values.email}</p>
                    </div>
                </div>
            </div>
            <div className='edit-btn'>
                <button
                    onClick={() => editUser(values)}
                >
                    Zmień dane
                </button>
            </div>
        </div>
    )
}
