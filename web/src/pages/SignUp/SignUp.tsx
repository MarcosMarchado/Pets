import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import logo from '../../assets/logo.svg'
import './style.css'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

export default function SignUp() {
    const userInitalState = {
        name: '',
        email: '',
        password: ''
    }
    const [user, setUser] = useState(userInitalState)
    const history = useHistory()

    function handleInputChage(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()
        const data = user
        await api.post('signup', data)
            .then(res => {
                alert(res.data)
                history.push("/")
            })
    }

    return (
        <div className="signup">
            <header>
                <div className="logo">
                    <img src={logo} alt="pets" />
                    <h1>Pets</h1>
                </div>
            </header>
            <div className="form">
                <h1>Sign <span>Up</span></h1>
                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <label htmlFor="name">Name</label>
                        <input type="text"
                            name="name"
                            id="name"
                            onChange={handleInputChage}
                        />
                    </div>
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
                    <button>Sign Up</button>
                    <Link to="/">
                        <p>Login</p>
                    </Link>
                </form>
            </div>
        </div>
    )
}