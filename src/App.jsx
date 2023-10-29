import React, { useState } from 'react'
import { Bar } from './Header/Bar'
import { Body } from './Body/Body'
import { Test } from './File/Test'
import { Service } from './Header/Service'
import { Route, Routes, useLocation ,Link} from 'react-router-dom'
import Pic from './Pic/me2.jpg'
export const App = () => {
  const name = useLocation()

  const p1 = "/Service"
  const p2 = "/Contact"
  const p3 = "/About"
  return (
    <div>
      <header>
        <Bar />
      </header>

      {name.pathname !== p1 && name.pathname !== p2 && name.pathname !== p3 && (
        <section>
          <div className="txt">
            <img className='me' src={Pic} alt={Pic} />
            <h1>hi, I'm Rorn Mony</h1>
            <h2>I'm Web Developer</h2>
            <p>Hodsflkkl;sajkdf;sdljkfkdsf</p>

            <a href="#">Download CV</a>
          </div>
          <div className="login">
            <div className="box">
              <h1>Login</h1>
              <div className="input">
                <input type="Email" />
                <label>Username</label>
              </div>
              <div className="input">
                <input type="Password" />
                <label>Password</label>
              </div>
              <div className="sigup">
                <button className='btn'>Login</button>
                <p>Are you not acc please Sigup</p>
                <Link>Sigup</Link>
                
              </div>
            </div>



          </div>
        </section>
      )}

      <Routes>
        <Route path='/' />
        <Route path='/Service' element={<Service />} />
        <Route path='/Contact' element={<Service />} />
        <Route path='/About' element={<Service />} />

      </Routes>

    </div>

  )
}
