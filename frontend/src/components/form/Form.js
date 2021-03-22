import React from "react"
import "./Form.css"
import logo from "../../assets/olx-logo.png"
import { Link } from "react-router-dom"

export default function Form({ children, values, state, handleSubmit, history }) {
  return (
    <form className="px-5 py-3 main-form mb-4">
      <div className="text-center mb-4">
        <Link to="/">
          <img src={logo} alt="logo olx" className="img-fluid olx-logo mt-4" />
        </Link>
      </div>
      <hr className="mb-4" />

      <div className="my-4">
        <label htmlFor="email" className="text-left">
          <strong>E-mail</strong>
          <small className="text-muted">{children && ' Wyślemy Ci wiadomość e-mail z potwierdzeniem.'}</small>
        </label>
        <input
          type="email"
          name="email"
          className="form-control input-height light-grey"
          value={state.email}
          onChange={event => state.setEmail(event.target.value)}
          required
        />
      </div>

      {children}

      <div className="my-4">
        <label htmlFor="password" className="text-left">
          <strong>Hasło</strong>
          <small className="text-muted">{children && ' Użyj liter, cyfr i znaków specjalnych.'}</small>
        </label>
        <input
          type="password"
          className="form-control input-height light-grey"
          value={state.password}
          onChange={event => state.setPassword(event.target.value)}
        />
      </div>

      <button className="btn btn-orange my-3 w-100"
        onClick={event => handleSubmit(event, history)}
      >
        {values.btnTitle}
      </button>
      <hr />
      <p className="text-center">
        {values.footerText}
        <Link to={`/${values.footerLink}`}>
          <strong> {values.footerLinkText}</strong>
        </Link>
      </p>
    </form>
  )
}
