import React, { useState } from 'react'
import projcets from '../../data/data.jsx'
import './Allprojects.css'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import SplitText from './SplitText.jsx';
function Allprojects() {
  const [data, setData] = useState(projcets)
  return (
    <div className='allProjects wrapper'>
        <div className="title">
            <SplitText text='Projects'/>
            <div className='bar'></div>
        </div>
        <div className="projects-container">
        {
            data.map((project) => {
              return <div className='card' key={project.id}>
                          <div className="card-image">
                            <img src={project.image} width='100px'/>
                          </div>
                          <div className="card-title">
                            <h4>{project.title}</h4>
                          </div>
                          <div className="card-tech">
                            {
                              project.tech.map((e, i) => {
                                return <span key={i}>{e}</span>
                              })
                            }
                          </div>

                          <div className="links-ul">
                            <ul className="card-links">
                              {
                                project.navLinks.map((link, i) => {
                                  return <li className='li-link' key={i}>
                                    <div className="lik">
                                    <Link to={project.links[i]} target="_blank">{link==='github' ? <GitHubIcon/> : <OpenInNewIcon/>}</Link>
                                    {/* <div className="link-icon">
                                    <OpenInNewIcon/>
                                    </div> */}
                                    </div>
                                  </li>
                                })
                              }
                            </ul>
                          </div>
                          
                     </div>
            })
          }
        </div>
    </div>
  )
}

export default Allprojects