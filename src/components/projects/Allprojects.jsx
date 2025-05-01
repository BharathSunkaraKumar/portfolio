import React, { useState } from 'react'
import projcets from '../../data/data.jsx'
import './Allprojects.css'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
function Allprojects() {
  const [data, setData] = useState(projcets)
  return (
    <div className='allProjects wrapper'>
        <div className="title">
            <h1>Projects</h1>
            <div className='bar'></div>
        </div>
        <hr/>
        <div className="projects-container">

        </div>
    </div>
  )
}

export default Allprojects