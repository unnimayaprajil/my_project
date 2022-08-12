import React, { useContext } from 'react'
import './HeaderComponent.css'
import { AuthContext, FirebaseContext } from '../../Store/FirebaseContext'
import { useNavigate } from 'react-router-dom'

const HeaderComponent = () => {
    const { user } = useContext(AuthContext)
    const { firebase } = useContext(FirebaseContext)
    const navigate = useNavigate()
    return (
        <nav className="navbar ">
            <div className="container-fluid">
                <a className="navbar-brand">MASTERMIND</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <span className="navbar-text">
                        {user.displayName}
                    </span>
                    <span className="navbar-text" onClick={() => {
                        firebase.auth().signOut()
                        navigate('/login') 
                    }}>Logout</span>
                </form>
            </div>
        </nav>

    )
}

export default HeaderComponent