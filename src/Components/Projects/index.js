import React, {useContext} from 'react'
import Style from './style.css'
import ProjectsContext from '../../utils/ProjectsContext'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Projects() {
const projects = useContext(ProjectsContext)

    console.log(projects)
    return (
        <div className="ConStyle">
            <div className="title">
            <h1 className="display-4">Projects</h1>
            </div>
            <hr />
            <div className="row card-group">
            {projects.map((project, i) => (
                <div className="col-sm-4 projectStyle rounded" data-aos="fade-left">
                    <h3 className="font-weight-normal">
                    {project.name}
                    </h3>
                    <a href={project.link}>
                    <img className="rounded projectImg" src={project.image} alt="project" />
                    </a>
                </div>
    ))}
            </div>
        </div>
    )
}

export default Projects;