import React, {useMemo} from 'react'
import './FormProfile.css'

export default function FormProfile({values, state, handleSubmitUser}) {
    const preview = useMemo(
        () => {
            return typeof state.avatar === 'object' ? URL.createObjectURL(state.avatar) : state.avatar
        }, [state.avatar]
    )


    return (
        <section id="form" className="py-5 px-3">
            <p className='header-profile'>Zmień dane kontaktowe</p>
            <div className='profile-container'>
                <div className='profile-edit-form-img'>
                    <img
                        src={typeof state.avatar === 'object' ? `${preview}` : `https://limitless-reaches-05484.herokuapp.com/files/${state.avatar}`}
                        alt="preview"
                        className="img-profile-dashboard"
                    />
                    <input
                        type="file"
                        onChange={e => state.setAvatar(e.target.files[0])}
                    />
                </div>
                <div className='profile-edit-data'>
                    <div className='values-edit'>
                        <label>E-mail</label>
                        <input
                            type="text"
                            placeholder={state.nickname}
                            className="input-height form-control"
                            value={state.nickname}
                            onChange={e => state.setNickname(e.target.value)}
                        />
                    </div>
                    <div className='values-edit'>
                        <label>Telefon</label>
                        <input
                            type="text"
                            placeholder={state.phone}
                            className="input-height form-control"
                            value={state.phone}
                            onChange={e => state.setPhone(e.target.value)}
                        />
                    </div>
                    <div className='values-edit'>
                        <label>E-mail</label>
                        <input
                            type="text"
                            placeholder={state.email}
                            className="input-height form-control"
                            value={state.email}
                            onChange={e => state.setEmail(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="edit-btn">
                <button
                    type="submit"
                    onClick={handleSubmitUser}
                >
                    Zapisz
                </button>
            </div>
        </section>
    )
}
