import React, {useContext, useState} from 'react'
import api from './services/api'

const ProfileContext = React.createContext()

export const useProfile = () => {
    return useContext(ProfileContext)
}

export const ProfileProvider = ({ children }) => {
    const [form, setForm] = useState(false)
    console.log("dsddd",children)
    const state = {
        form,
        setForm,
    }
    return (
        <ProfileContext.Provider value={{state}}>
            {children}
        </ProfileContext.Provider>
    )
}