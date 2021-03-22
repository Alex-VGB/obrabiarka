import React, { useState } from "react"
import "./Navbar.css"
import logo from "../../assets/olx-logo.png"

import { Link } from "react-router-dom"
import { ProductConsumer } from "../../context"

export default function Navbar({ values }) {
  const [smallScreen, setSmallScreen] = useState(false)

  return (
    <ProductConsumer>
      {value => {
        const { isAuthenticated, setForm } = value.state
        const { logout } = value
        return (
          <nav className="navbar-olx">
            <div className="container-fluid border-bottom">
              <div className="row py-2 align-items-center justify-content-between bg-header">
                <div className="d-flex align-items-center">
                  <div
                    className="pos-f-t d-block d-md-none"
                    onClick={() => setSmallScreen(!smallScreen)}
                  >
                    <nav className="navbar navbar-light">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"/>
                      </button>
                    </nav>
                  </div>

                  <div>
                    <Link to="/">
                      <img src={logo} alt="logo obrabiarka" className="olx-logo-small" />
                    </Link>
                  </div>
                </div>

                <div className="mt-3">
                  <ul className="d-flex align-items-center list-menu">
                    <li
                      className="mx-3 d-none d-md-block"
                      onClick={() => setForm(false)}
                    >
                      <Link to="/dashboard">
                        <i className="fas fa-th-large mr-2"/>
                        Moje aukcje
                      </Link>
                    </li>
                    <li
                        className="mx-3 d-none d-md-block"
                    >
                      <Link to={`/profile`}>
                        <i className="fas fa-user-circle mr-2"/>
                        Profile
                      </Link>
                    </li>
                    {
                      !isAuthenticated &&
                      <li className="mx-3 d-none d-md-block">
                        <Link to="/login">
                          <i className="far fa-user mr-2"/>
                          Zaloguj się
                        </Link>
                      </li>
                    }
                    {
                      isAuthenticated &&
                      <li className="mx-3 d-none d-md-block">
                        <Link onClick={logout} to="/">
                          <i className="fas fa-sign-out-alt mr-2"/>
                          Wyjść
                        </Link>
                      </li>
                    }
                    <li className="mx-3 d-none d-md-block">
                      <Link to="/chat">
                        <i className="far fa-comment mr-2"/>
                        Chat
                      </Link>
                    </li>
                    <li className="mx-3">
                      <Link to="/dashboard">
                        <button
                          className="btn btn-orange btn-nav"
                          onClick={() => setForm(true)}
                        >
                          Dodaj ogłoszenie
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Nav for small screens */}
            {smallScreen && (
              <div className="container-fluid d-block d-md-none position-absolute">
                <div className="row">
                  <div className="col-8 col-sm-6 nav-small-screen">
                    <ul className='list-menu'>
                      {
                        !isAuthenticated &&
                        <li className="mt-2">
                          <Link to="/login">Zaloguj się</Link>
                        </li>
                      }
                      {
                        !isAuthenticated &&
                        <li>
                          <Link to="/dashboard">Zarejestruj się</Link>
                        </li>
                      }
                      { !isAuthenticated && <hr />}
                      <li>
                        <Link to="/dashboard">Moje aukcje</Link>
                      </li>
                      <li>
                        <Link to="/chat">Chat</Link>
                      </li>
                      {
                        isAuthenticated &&
                        <li>
                          <Link onClick={logout} to="/" >Wyjść</Link>
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </nav>
        )
      }}
    </ProductConsumer>
  )
}
