import React, {useState, useEffect, useCallback} from 'react'
import api from '../../services/api'


import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import FormProfile from '../../components/form-profile/FormProfile'
import ProfileDashboard from '../../components/profile-dashboard/ProfileDashboard'
import {ProductConsumer} from "../../context";


export default function Profile({location, history}) {
    const [user, setUser] = useState([])
    const [isAuth, setIsAuth] = useState(false)
    const [pageLoaded, setPageLoaded] = useState(false)

    const [avatar, setAvatar] = useState()
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    let setForm


    const _id = localStorage.getItem('_id')
    const authorization = localStorage.getItem('Authorization')


    useEffect(() => {
        const isAuthenticated = async () => {
            const response = await api.get('/validate-token', {
                headers: {authorization}
            })

            setIsAuth(response.data)
            setPageLoaded(true)
            !response.data && history.push('/login')
        }
        isAuthenticated()
    }, [authorization, history])


    const loadUser = (useCallback(async () => {
        const response = await api.get(`/profile?_id=${_id}`, {
            headers: {authorization}
        })
        setUser(response.data)
    }, [_id, authorization, location.search]))

    useEffect(() => {
        loadUser()
    }, [loadUser, location.search])

    const handleSubmitUser = async event => {
        event.preventDefault()

        const data = new FormData()
        data.append('avatar', avatar)
        data.append('nickname', nickname)
        data.append('email', email)
        data.append('phone', phone)
        console.log("data after click ", data)
        if (_id !== '') {
            await api.post(`/profile/update`, data, {
                headers: {_id, authorization}
            })
        }
        loadUser()
        setForm(false)

    }

    const editUser = async user => {
        setNickname(user.nickname)
        setAvatar(user.avatar)
        setEmail(user.email)
        setPhone(user.phone)

        setForm(true)
    }


    const state = {
        avatar,
        setAvatar,
        nickname,
        setNickname,
        email,
        setEmail,
        phone,
        setPhone
    }


    return pageLoaded && isAuth ? (
            <>
                <Navbar/>
                <div className="container">
                    <ProductConsumer>
                        {value => {
                            const {form} = value.state
                            setForm = value.state.setForm
                            return form
                                ? (<FormProfile state={state} handleSubmitUser={handleSubmitUser}/>)
                                : (<ProfileDashboard editUser={editUser} values={user}/>)
                        }}
                    </ProductConsumer>
                </div>
                <Footer/>
            </>
        ) :
        <div className="loading">
            <h1><span className="text-purple">Lo</span><span className="text-warning">adi</span><span
                className="text-orange">ng</span> <span className="text-danger">.</span><span
                className="text-warning">.</span><span className="text-primary">.</span></h1>
        </div>
}
