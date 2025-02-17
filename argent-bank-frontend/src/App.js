import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import SignIn from './pages/SignIn/SignIn'
import Dashboard from './pages/Dashboard/Dashboard'
import AccountPage from './pages/AccountPage/AccountPage'
import Error404 from './pages/Error404/Error404'

import './App.css'

/** 
 * @file App.js is the root file for this app. <br>
 * * @author Veronica BERNARD
 * @see <a href="https://github.com/VSABernard">My GitHub</a>
 */

const App= () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} /> 
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/Dashboard" element={<Dashboard/>}/>   
          <Route path="/AccountPage/:accountId" element={<AccountPage/>}/>
          <Route path="*" element={<Error404/>} />  
        </Routes>
    </BrowserRouter>    
  )
}

export default App
