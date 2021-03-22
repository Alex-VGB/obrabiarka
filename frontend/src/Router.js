import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// PAGES
import Chat from './pages/chat/Chat'
import Dashboard from './pages/dashboard/Dashboard'
import Details from './pages/details/Details'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Profile from './pages/profile/Profile'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/details" component={Details} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/chat" component={Chat} />
            <Route path="/profile" component={Profile} />
        </Switch>
    </BrowserRouter>
)

export default Router