import React, { useState, useContext } from 'react'
import './SignUpComponent.css'
import mainLogo from '../../assets/download.jpg';
import downloadd from '../../assets/downloadd.jpg';
import { FirebaseContext } from '../../Store/FirebaseContext';
import { useNavigate } from 'react-router-dom';
const SignUpComponent = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phNo, setPhNo] = useState('')
    const { firebase } = useContext(FirebaseContext)
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
            result.user.updateProfile({ displayName: userName }).then(() => {
                firebase.firestore().collection('OLX').add({ id: result.user.uid, username: userName, phone: phNo }).then(() => {
                    navigate('/login');
                })
            })
        })
        console.log('value inside form', userName)
    }
    return (
        <div className='main-wrapper'> 
          <form onSubmit={handleSubmit}>
            <div className="signup-wrapper container-fluid text-center">

                <div className=" row g-0 wrapper mx-auto  ">

                    <div className=" col-lg-6 col-sm-12  left-wrapper">
                        <img src={mainLogo} alt="logo" className="img-logo" />
                        <h3 className='title'>MASTERMIND MAESTRO</h3>
                        <p>Create an account</p>
                        <button type="button" className="btn ">Sign up with facebook</button>
                        <div className="mb-3 mt-3 ">
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control mb-3 " placeholder="UserName" />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mb-3 " placeholder="Password" />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mb-3 " placeholder="Email" />
                            <input type="number" value={phNo} onChange={(e) => setPhNo(e.target.value)} className="form-control" placeholder="Phone Number" />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                        <p className='text'>Already have an account?<a href="/login">LogIn</a></p>
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

export default SignUpComponent