import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-lg-8 mx-auto">
                        <div className="row my-3">
                            <ul className="d-flex footer-list">
                                <li className="mr-3">Pomoc i kontakt</li>
                                <li className="mr-3">Zasady bezpieczeństwa</li>
                                <li className="mr-3">Jak działa Obrabiarka.pl</li>
                                <li className="mr-3">Polityka prywatności</li>
                            </ul>
                        </div>
                        <div className="row my-5 footer-copy">
                            <div>
                                <small>
                                    <span className="underline">o Obrabiarka.pl</span>,
                                    <span className="underline"> Warunki użytkowania</span> i <span className="underline">politykę prywatności</span>
                                </small>
                            </div>
                            <div>
                                <small className="text-capitalize"> Copyright &copy; 2021 Abplanalp Sp. z o.o. All
                                rights reserved</small>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 my-3">
                        <hr className="d-block d-lg-none"/>
                        <div className="row icons justify-content-center">
                            <ul className="list-icons d-flex">
                                <li className="facebook mx-3">
                                    <i className="fab fa-facebook-f "/>
                                </li>
                                <li className="youtube mx-3">
                                    <i className="fab fa-youtube "/>
                                </li>
                                <li className="linkedin mx-3">
                                    <i className="fab fa-linkedin-in "/>
                                </li>
                                <li className="instagram mx-3">
                                    <i className="fab fa-instagram "/>
                                </li>
                            </ul>
                            <div className="col-12 text-right mx-auto">
                                <p className="ads text-white">Firma <span className="underline">Abplanalp</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
