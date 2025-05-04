import React from 'react'
import './Landing.css'
import Projects from '../projects/Projects.jsx'
import SplitText from '../projects/SplitText.jsx'
function LandingPage() {
  return (
    <>
        <div className='landing-container wrapper'>
            <div className="linding-items ">
                <div className="titles">
                    <div className="titile">
                        <h1>bhatath kumar sunkara</h1>
                    </div>
                    
                    <div className="tag">
                        <p>Designing through a different lens.</p>
                    </div>
                </div>
            </div>
            <div className="linding-box">
                <div className="profile-img">
                    <img src='https://aakash-sharma.netlify.app/static/media/webdev.4d72dbba32efee3890cef9bcacce7aa7.svg' alt="profile" />
                </div>
                <div className="profile-info">
                    
                        <SplitText text='Hello!'/>
                    
                    <p>I'm a passionate <strong>Frontend Developer</strong> with a keen eye for detail and a love for crafting interactive, responsive, and user-friendly web experiences. 
                    I specialize in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and modern libraries like <strong>React.js</strong>.
                    My goal is to bring designs to life with clean, maintainable code and delightful UI interactions.</p>
                </div>
            </div>
        </div>
        <div className="work wrapper">
            <Projects/>
        </div>
    </>
  )
}

export default LandingPage