import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import api from '../../services/api'
import { logout } from '../../services/isAuthenticated'

import './style.css'

interface User {
    email: string
    id: string
    name: string
}

export default function Profile() {
    const [user, setUser] = useState<User>()
    const history = useHistory()

    useEffect(() => {
        api.get('success').then(res => setUser(res.data))
    }, [])

    function handleLogout() {
        logout()
        history.push('/')
    }

    return (
        <div className="profile">
            <div className="user">
                <div className="avatar">
                    <img src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg" alt="doguinho" />
                    <p>{user?.name}</p>
                </div>
                <aside className="user-menu">
                    <ul>
                        <li>
                            <Link to="/profile">
                                Fotos
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                Amigos
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                Cursos
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                Batata
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                Cebola
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleLogout} to="/">
                                Log Out
                            </Link>
                        </li>
                    </ul>
                </aside>
            </div>
            <main>
                <header>
                    <button onClick={handleLogout}>
                        Log Out
                        <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </button>
                </header>
                <h1>Welcome, {user?.name}!!</h1>
            </main>
            <footer>
                <a href="http://www.freepik.com">Designed by Freepik</a>
            </footer>
        </div>
    )
}