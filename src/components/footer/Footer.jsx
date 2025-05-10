import React from 'react'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer-container'>
      {/* <div className="say-hi wrapper">
        <h1>👋 Thanks for stopping by! Here is more of me if you are interested :)</h1>
      </div> */}
      <table>
          <thead>
            <tr>
              <th>pages</th>
            
              <th>featured projects</th>
            
              <th>know more</th>
            </tr>
          </thead>
        <tbody>
          <tr>
            <td><Link to='/'>Home</Link></td>
            <td><Link to='https://bharath-sunkara-rcr.netlify.app/' target="_blank">rcr</Link></td>
            <td><Link to='https://github.com/BharathSunkaraKumar' target="_blank">github</Link></td>
          </tr>
          <tr>
            <td><Link to='/about'>about</Link></td>
            <td><Link to='https://react-theme-dark.netlify.app/' target="_blank">dark mode</Link></td>
            <td>linkedin</td>
          </tr>
          <tr>
            <td><Link to='/projects'>Projects</Link></td>
            <td><Link to='https://reacttodos-app.netlify.app/' target="_blank">todos app</Link></td>
            <td>cv</td>
          </tr>
          {/* <tr>
            <td></td>
            <td></td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default Footer