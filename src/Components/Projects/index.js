import React, {useContext} from 'react'
import Style from './style.css'
import ProjectsContext from '../../utils/ProjectsContext'

function Projects() {
const projects = useContext(ProjectsContext)
    return (
        <div className="jumbotron Style">
            <div className="row">
            <h1 className="display-4">Check out my projects</h1>
            </div>
            <hr />
            <div className="row">

            </div>
        </div>
    )
}

export default Projects;