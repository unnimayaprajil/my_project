import './App.css';
import React, { useEffect, useContext } from 'react'
import Create from "./Pages/Create";
import ViewPost from './Pages/ViewPost';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import { AuthContext } from './Store/FirebaseContext';
function App() {
  const context = useContext(AuthContext)
  useEffect(() => {
    console.log(context)

  })

  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<SignUpPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/viewpost" element={<ViewPost />}></Route>
      </Routes>
    </Router>


  );
}

export default App;
