import React from 'react'
import './ProjectComponent.css'


function ProjectComponent({ projectImage, projectHeading, projectDescription,  projectLink, color }) {

    return (
        <div id='project-component-container'>
            <div id='image-div' style={{backgroundColor:color}}>
                <div id='image-subdiv'><img src={projectImage} alt="" /></div>
            </div>
            <div id='description-div' >
                <p id='featured-project'>Featured Project</p>
                <p id='project-heading'>{projectHeading}</p>
                <div id='description-detail-div'>{projectDescription}</div>
                <div id='view-porject-button'>View Project</div>
            </div>
        </div>
    )
}

export default ProjectComponent;