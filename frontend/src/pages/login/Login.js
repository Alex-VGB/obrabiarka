import React from 'react'
import './Login.css'

import Form from '../../components/form/Form'
import Error from '../../components/error/Error'

import { ProductConsumer } from '../../context'

export default function Login({ history }) {
    
    const info = {
        title: 'Utwórz konto',
        btnTitle: 'Zaloguj się',
        footerText: 'Nie masz konta?',
        footerLink: 'register',
        footerLinkText: 'Zarejestruj się'
    }

    return (
        <div className="container">
            <div className="row form-login">
                <div className="col-md-8 col-lg-6 mx-auto my-5">
                    <ProductConsumer>
                        {value => {
                            const { login, state } = value
                            return (
                                <>
                                    {state.errors && <Error error={state.errors.error} />}
                                    <Form values={info} state={state} handleSubmit={login} history={history} />
                                </>

                            )
                        }}
                    </ProductConsumer>
                    <small className="policy">Zalogowanie oznacza akceptację <strong>Regulaminu</strong> oraz <strong>Politykę prywatności</strong>  serwisu Obrabiarka.pl w aktualnym brzmieniu.</small>
                </div>
            </div>
        </div>
    )
}
