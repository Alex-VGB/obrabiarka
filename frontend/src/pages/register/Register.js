import React, { useState } from 'react'
import './Register.css'
import api from '../../services/api'

import Form from '../../components/form/Form'
import Error from '../../components/error/Error'

export default function Register({ history }) {
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState(null)

    const handleSubmitUser = async event => {
        event.preventDefault()

        const response = await api.post('/profile/new', {
            email,
            nickname,
            phone,
            password
        })

        
        if(response.data.success) {
            history.push('/login')
        } else {
            setErrors(response.data)
        }

    }

    const state = {
        email,
        setEmail,
        password,
        setPassword,
    }

    const info = {
        title: 'Utwórz swoje konto',
        btnTitle: 'Utwórz',
        footerText: 'Posiadasz już konto?',
        footerLink: 'login',
        footerLinkText: 'Zaloguj się'
    }

    return (
        <div className="container">
            <div className="row form-register">
                <div className="col-md-8 col-lg-6 mx-auto my-5">
                    
                   { errors && <Error error={errors.error} />}

                    <Form values={info} state={state} handleSubmit={handleSubmitUser} >
                        <div className="my-4">
                            <label htmlFor="nickname" className="text-left">
                                <strong>Nazwa Firmy</strong>
                                <small className="text-muted"> Jak będzie wyglądać w Twoich reklamach.</small>
                            </label>
                            <input
                                type="text"
                                name="nickname"
                                className="form-control input-height light-grey"
                                placeholder="Przykład: Empik."
                                value={nickname}
                                onChange={event => setNickname(event.target.value)}
                                required
                            />
                        </div>
                        <div className="my-4">
                            <label htmlFor="phone" className="text-left">
                                <strong>Telefon</strong>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                className="form-control input-height light-grey"
                                value={phone}
                                onChange={event => setPhone(event.target.value)}
                                required
                            />
                        </div>
                    </Form>
                    <small className="policy">Rejestracja oznacza akceptację <strong>Regulaminu</strong> oraz <strong>Politykę prywatności</strong>  serwisu Obrabiarka.pl w aktualnym brzmieniu.</small>
                </div>
            </div>
        </div>
    )
}
