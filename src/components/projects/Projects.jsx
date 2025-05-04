import React, { useState } from 'react'

import './Project.css'
import img1  from './assets/Futuristic Virtual Reality Experience.jpeg';
import img2  from './assets/Futuristic VR Scene.jpeg';
import img3  from './assets/Virtual Reality Encounter.jpeg';
import FeaturedData from '../../data/FeaturedData';
import {Link} from 'react-router-dom';
function Projects() {
  const[date, setDate] = useState(FeaturedData)
  return (
    <>
      <section className='project-cards'>
        <div className="projects-heading">
          <p>Featured Projects</p>
        </div>
        {
            date.map((e) => {
              return <div className='project-card' key={e.id}>
                  <Link to={e.link} target="_blank">
                  
                  <div className="card-top">
                    <div className="card-top-title">
                      <p>{e.id} | {e.title}</p>
                    </div>
                    <div className="card-top-logo">
                      {e.logo}
                    </div>
                  </div>
                  <div className="card-bottom">
                    <div className="card-bottom-img">
                      <img src={e.img} alt='img' />
                    </div>
                    <div className="card-bottom-details">
                      <div className="card-bottom-tag">
                        <p>{e.tag}</p>
                      </div>
                      <div className="card-bottom-discription">
                        <p>{e.discription}</p>
                      </div>
                    </div>
                  </div>
                  </Link>
              </div>
            })
        }
      </section>
      <div className="footer">
        
      </div>
    </>
  )
}

export default Projects