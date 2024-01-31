import React, {useState} from 'react'
import './ProjectSection.css'
import projectImage1 from '../../../assests/projectImage1.jpg'
import projectData from '../../../data/Projects'
import ProjectComponent from '../ProjectsComponent/ProjectComponent'
import UpperBorder from '../../../assests/Border-top.svg'
import LowerBorder from '../../../assests/Border-bottom.svg'
import SmallRectangle from '../../../assests/SmallRectangle..svg'
import leftArrow from '../../../assests/arrow (2).svg'
import rightArrow from '../../../assests/arrow (1).svg'



function ProjectSection() {

    const [currentProject, setCurrentProject] = useState(0);

    const nextProject = () => {
      setCurrentProject((prev) => (prev + 1) % projectData.length);
    };
  
    const prevProject = () => {
      setCurrentProject((prev) => (prev - 1 + projectData.length) % projectData.length);
    };

    return (
        <div id="project-section">
            <div id='project-section-container'>
                <img src={UpperBorder} alt="" id='upper-border' />
                <img src={LowerBorder} alt="" id="lower-border" />
                <h2>Projects</h2>
                <img src={SmallRectangle} alt="" />
                <p id="heading-text">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p>
                <div id='project-component-div'>
                    <div id='left-button' onClick={prevProject}>&lt;<img src={leftArrow} alt="" /></div>

                    <ProjectComponent 
                        projectImage={projectData[currentProject].projectImage} 
                        projectHeading ={projectData[currentProject].projectHeading}
                        projectDescription ={projectData[currentProject].projectDescription}
                        color={projectData[currentProject].backgroundColor}
                        id="project-component"
                        
                     />

                    <div id='right-button' onClick={nextProject}>&gt;<img src={rightArrow} alt="" /></div>

                </div>
            </div>
        </div>

    )
}
export default ProjectSection;