import React from 'react';
import ProjectSummary from './ProjectSummary.js';
// import {isNotEmptyArray} from '../../utils/commonChecks';

import {Link} from 'react-router-dom'; 

const ProjectList=(props)=>{
    const {projects}=props;

    const notArray={
                    "hello":"hero",
                    groot:"not root",
                    };

    const isNotEmptyArray=(checkItem)=>{
        console.log(checkItem && Array.isArray(checkItem));
        return checkItem && Array.isArray(checkItem) && checkItem.length!==0;
    }


    return (
        <div className="project-list section">                       
            {/* {
                // projects && Array.isArray()
                // console.log(isNotEmptyArray(projects))
                isNotEmptyArray(projects) &&  projects.map((project)=>{

                    return (
                        <ProjectSummary project={project} />
                    )
                })
                    
            } */}
            {
                projects && projects.map(project=>{
                    return(
                        <Link to={ `/project/${project.id}` } key={project.id}>
                            <ProjectSummary project={project} />
                        </Link>
                    )
                })
            }
               
        </div>
    )
}

export default ProjectList;
