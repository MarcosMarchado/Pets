import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import api from '../../services/api'
import { login } from '../../services/isAuthenticated'
import './style.css'

export default function Home() {
    const [user, setUser] = useState({ email: '', password: '' })
    const history = useHistory()

    function handleInputChage(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        const data = user
        await api.post('signin', data)
            .then(res => {
                login(res.data.token)
                history.push("/profile")
            })
            .catch(err => {
                alert("Credenciais inválidas.")
            })
    }

    return (
        <React.Fragment>
            <div className="home">
                <header>
                    <div className="logo">
                        <img src={logo} alt="pets"></img>
                        <h1>Pets</h1>
                    </div>
                </header>
                <div className="form">
                    <h1>Log <span>in</span></h1>
                    <form onSubmit={handleSubmit}>
                        <div className="email">
                            <label htmlFor="email">E-mail</label>
                            <input type="text"
                                name="email"
                                id="email"
                                onChange={handleInputChage}
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                name="password"
                                id="password"
                                onChange={handleInputChage}
                            />
                        </div>
                        <button type="submit">Log In</button>
                        <p>Forgot password?</p>
                    </form>
                    <Link to="/signup">
                        <p className="signup-link">Don't have an account? <strong>Sign Up</strong> </p>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}