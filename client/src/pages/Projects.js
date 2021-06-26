import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import API from "../utils/API";
import "./Projects.scss";

function Projects(){

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        loadProjects();
    }, [])

    function loadProjects() {
        API.getProjects()
            .then(response => {
                console.log(response);
                setProjects(response);
            })
            .catch(error => {
                setProjects([])
                console.error(error)
            })
    }

    return(
        <section className="section active" >
            
                { projects.length ? (
                    <ul id="portfolio-items-list">
                    {projects.map(project => {
                        return (
                            <li key={project._id} className="portfolio-item">
                                <a href="project.link">
                                    <img src={"/images/" + project.image} />
                                </a>
                                <div className="item-text">
                                    <h2 className="item-title">{project.name}</h2>
                                    <p className={"item-description"}>{project.description}</p>
                                </div>
                            </li>
                        )
                    })}
                   </ul>
                ) : (
                    <h3>No Projects</h3>
                )}
            
        </section>
    )

}

export default Projects;