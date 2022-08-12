import React, { useState, useContext, useEffect } from 'react'
import { AuthContext, FirebaseContext } from '../../../Store/FirebaseContext'
import { useNavigate } from 'react-router-dom';
import mainLogo from '../../../assets/download.jpg'
import downloadd from '../../../assets/downloadd.jpg'
const LoginComponent = () => {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const { setUser } = useContext(AuthContext)
    const { firebase } = useContext(FirebaseContext)
    const navigate = useNavigate();
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => { setUser(user) })
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            navigate('/home')
        }).catch((error) =>
            alert(error))
        console.log('value inside form')
    }
    return (
        <div className='main-wrapper'>
            <form onSubmit={handleSubmit}>
                <div className="signup-wrapper container-fluid text-center">

                    <div className=" row g-0 wrapper mx-auto  ">

                        <div className=" col-lg-6 col-sm-12  left-wrapper">
                            <img src={mainLogo} alt="logo" className="img-logo" />
                            <h3 className='title'>MASTERMIND MAESTRO</h3>
                            <div className="mb-3 mt-3 ">
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mb-3 " placeholder="Password" />
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mb-3 " placeholder="Email" />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <div className="col-lg-6 col-sm-12 right-wrapper ">
                            <img src={downloadd} className="img-fluid image opacity-50" alt="..." />
                            <div className="top-right"><h3>Mastermind better</h3><h3>Succeed together</h3><p>n polder text commonly used to demonstrate the visual form of a document or a typeface without</p></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginComponent
