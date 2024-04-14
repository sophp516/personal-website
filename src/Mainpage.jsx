import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import "./Mainpage.css"
import Weather from './Weather'

const Mainpage = () => {

    const NameCard = () => {
        return (
            <div className="name Card">
                <img src="" />
                <p>Hello World!</p>
                <p>My name is <span>Sophie Park</span> and I love art, tech, and anything creative!</p>
                <div>
                    <div className="social-icon">
                        <SocialIcon style={{ height: 25, width: 25 }} url="https://github.com/sophp516" />
                        <a href="https://github.com/sophp516"><button href="">Git</button></a>
                    </div>
                    <div className="social-icon">
                        <SocialIcon style={{ height: 25, width: 25 }} url="https://www.linkedin.com/in/sophie-park-19b5a928b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
                        <a href="https://www.linkedin.com/in/sophie-park-19b5a928b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><button href="">LinkedIn</button></a>
                    </div>
                    <div className="social-icon">
                        <SocialIcon style={{ height: 25, width: 25 }} url="https://www.instagram.com/sophp04?igsh=YzM3cHhjNGQ1dHZ6&utm_source=qr" />
                        <a href="https://www.instagram.com/sophp04?igsh=YzM3cHhjNGQ1dHZ6&utm_source=qr"><button>Instagram</button></a>
                    </div>
                </div>
            </div>

        )
    }

    const Skills = () => {
        return (
            <div className="skill Card">
                <p className="title">Skills</p>
                <div>
                    <p>React</p>
                    <p>JavaScript</p>
                    <p>Node.js</p>
                    <p>Express</p>
                    <p>Java</p>
                    <p>Python</p>
                </div>
            </div>
        )
    }

    const Experience = () => {
        return (
            <div className="experience Card">
                <p className="title">Experience</p>
                <div className="experience-flex">
                    <img src="src/assets/dali_img.jpeg"></img>
                    <div>
                        <p>DALI LAB</p>
                        <p>WISP intern</p>
                        <p>Me and my teammates developed a D-planning and sharing website fore Dartmouth students using React, Redux, and Firebase!</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="mainContainer">
            <Weather />
            <NameCard />
            <Skills />
            <Experience />
        </div>
    )
}

export default Mainpage 