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

    Window.enlarge = (event) => {
        const screenShot = event.target;
        //console.log(event.target.src);
        const body = document.querySelector('body');
        console.log(screenShot.src);
        const backdrop = document.createElement('div');
        backdrop.classList.add('modal-backdrop');
        backdrop.id = 'modal-backdrop';
        backdrop.addEventListener('click', Window.close);
        body.appendChild(backdrop);

        const image = document.createElement('img');
        const zIndex = findHighestZIndex('div') + 1;
        image.style.zIndex = zIndex;
        image.src = screenShot.src;
        image.classList.add('enlarged-screen-shot');
        image.id = 'active-enlarged-image';
        
        body.appendChild(image);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    const findHighestZIndex = (elem) =>
    {
      var elems = document.getElementsByTagName(elem);
      var highest = Number.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1);
      for (var i = 0; i < elems.length; i++)
      {
        var zindex = Number.parseInt(
          document.defaultView.getComputedStyle(elems[i], null).getPropertyValue("z-index"),
          10
        );
        if (zindex > highest)
        {
          highest = zindex;
        }
      }
      return highest;
    }

    Window.close = () => {
        const backdrop = document.querySelector('#modal-backdrop');
        const image = document.querySelector('#active-enlarged-image');
        backdrop.remove();
        image.remove();
    }

    return(
        <section className="section active" >
            
                { projects.length ? (
                    <ul id="portfolio-items-list">
                    {projects.map(project => {
                        return (
                            <li key={project._id} className="portfolio-item">
                                <a href={project.link}>
                                    <img src={"/images/" + project.image} />
                                </a>
                                <div className="item-text">
                                    <h2 className="item-title">{project.name}</h2>
                                    <p className={"item-description"}>{project.description}</p>
                                    {project.badges.length ? (
                                        <div className="item-badges">
                                        {project.badges.map(badge => {
                                            let badgeClassName = "";
                                            if(badge.showLabel) badgeClassName = "portfolio-badge"
                                            return (<a key={badge.label} className={badgeClassName}>
                                            {badge.image ? (
                                                <img src={"/images/" + badge.image}></img>
                                            ) : (
                                                <span>{badge.label}</span>
                                            )}
                                            </a>)
                                        })}
                                        </div>
                                    ) : (
                                        <span></span>
                                    )}

                                    {project.screenShots.length ? (
                                        <div className="item-screen-shots">
                                            {project.screenShots.map(screenShot => {
                                                return (
                                                    <span key={screenShot.image} className="screen-shot-link">
                                                        <img onClick={Window.enlarge} className="screen-shot-thumbnail" src={"/images/" + screenShot.image}/>
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    ) : (<span></span>)}

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