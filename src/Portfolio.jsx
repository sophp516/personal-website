import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Portfolio.css"

const Portfolio = () => {

    const projects = [
        {id: 0, projectName:"DartPath",
        tool: ["React", "Firebase", "ReactQuery"],
        description:"As part of my WISP project, our team developed a Dplan building and sharing Website."},
        {id: 1, projectName:"Darthrift",
        tool: ["React", "Node.js", "Express", "MongoDB"],
        description:"I am currently developing an online secondhand marketplaces that connects buyers and sellers within or near Dartmouth's campus."},
        {id: 2, projectName:"3D Animation",
        tool: ["Maya", "AE", "Substance Painter"],
        description:"I created a 3D animation using Maya.",
        videoUrl: "src/assets/sophie_park_biped_animation.mov"},
        {id: 3, projectName:"2D Animation",
        tool:["Procreate", "AE"],
        description:"I created a 2D animation using Procreate and AfterEffects.",
        videoUrl:"src/assets/sophie_animation_challenge.mov"},
        {id: 4, projectName:"Drawing",
        tool: ["Procreate"],
        description:"Here are some of my drawings, both traditional and digital."},
    ]


    const ProjectCard = () => {
        const videoRefs = useRef([]);

        useEffect(() => {
            videoRefs.current.forEach(video => video.play());
        }, []);

        return projects.map(project => (
            <div 
                className="projectCard" 
                key={project.id}
                /* onMouseEnter={() => handleMouseEnter(project.id)}
                onMouseLeave={handleMouseLeave} */>
                <div className="projectName">
                    <span className="projectName-span">{project.projectName}</span>
                    {project.tool.length != 0 && 
                        <p className="projectTool">
                            {project.tool.map((item, index) => (
                                <span className="tool" key={index}>{item} </span>
                            ))}
                        </p>}
                </div>
                <div className="projectDescriptionContainer">
                    <div className="projectDescriptionOverlay"></div>
                    <div className="projectDescription">{project.description}</div>
                </div>
                {(project.id === 2 || project.id === 3) && (
                    <video className="projectVideo" src={project.videoUrl} autoPlay muted loop playsInline ref={videoRef => videoRefs.current.push(videoRef)}/>
                )}
            </div>
        ));
    };

    return (
        <div className="projectContainer">
            <ProjectCard />
        </div>
    )
}

export default Portfolio 