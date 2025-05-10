import React from 'react'
import './About.css'
import mypic from './mypic.jpg'
import mypic2 from './mypic2.jpeg'
import mypic3 from './mypic3.jpeg'
import profile2 from './profile2.jpeg'
import react from '../../assets/react.svg'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import router from '../../assets/router.svg'
import formik from '../../assets/formik.svg'
import redux from '../../assets/redux.svg'
import SplitText from '../projects/SplitText';
import InfiniteScroll from '../../../react-bits/InfiniteScroll/InfiniteScroll'
function About() {
    const items = [
        { content: "Html" },
        { content: <img src={html} alt='html' width='50px'/> },
        { content: "Css" },
        { content: <img src={css} alt='css' width='50px'/> },
        { content: "JavaScript" },
        { content: <img src={js} alt='js' width='50px'/> },
        { content: "React" },
        { content: <img src={react} alt='react' width='50px'/> },
        { content: "React-Routing" },
        { content: <img src={router} alt='router' width='50px'/> },
        { content: "Redux-Tool-Kit" },
        { content: <img src={redux} alt='redux' width='50px'/> },
        { content: "Formik" },
        { content: <img src={formik} alt='formik' width='50px'/> },
      ];
  return (
    <>
    <div className='about-box wrapper'>
    <div className="title">
            <SplitText text='About'/>
            <div className='bar'></div>
        </div>
        <div className="about-container">
            <div className="about-left">
                <div className="about-left-hello">
                    <h1>Hi, I'm Bharath.</h1>
                </div>
                <div className="about-left-disc">
                    <p>
                     a passionate and motivated learner currently pursuing my Master of Computer Applications (MCA) at RCR College. Alongside my studies, I have been working at Venous Geo Solutions for the past 2 years.

                    At present, I’m deeply focused on Frontend Web Development, sharpening my skills in HTML, CSS, JavaScript, React.js, React-routing, Formik and Redux Toolkit, . I enjoy creating responsive, user-friendly web interfaces and continuously strive to learn new technologies to build modern web applications.

                    I'm excited to grow as a developer and contribute to innovative tech solutions.
                    </p>
                </div>
            </div>
            <div className="about-right">
                <div className="about-img">
                    <img src={profile2} alt='mypic' width='50px'/>
                </div>
            </div>
        </div>
        
    </div>
            <div className="tools wrapper">
                <SplitText text='Frontend'/>
                <div className='bar'></div>
            </div>
            <div style={{height: '500px', position: 'relative'}}>
            <InfiniteScroll
                items={items}
                isTilted={true}
                tiltDirection='left'
                autoplay={true}
                autoplaySpeed={0.1}
                autoplayDirection="down"
                pauseOnHover={true}
            />
            </div>
    </>
  )
}

export default About