import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import './nav.scss';

function Nav(props) {

    const [aboutActive, setAboutActive] = useState({});
    const [projectsActive, setProjectsActive] = useState({});

    useEffect(() => {
        const activePageURL = new URL(window.location.href);
        if(activePageURL.pathname === '/about' || activePageURL.pathname === '/'){
            setProjectsActive("nav-link");
            setAboutActive("nav-link active");
        } else if(activePageURL.pathname === '/projects') {
            setProjectsActive("nav-link active");
            setAboutActive("nav-link"); 
        } else {
            setAboutActive("nav-link"); 
            setProjectsActive("nav-link");
        }
    }, [])

    const setActivePage = (event) => {
        console.log(event.target.href);
        const activePageURL = new URL(event.target.href);
        if(activePageURL.pathname === '/about'  || activePageURL.pathname === '/'){
            setProjectsActive("nav-link");
            setAboutActive("nav-link active");
        } else {
            setProjectsActive("nav-link active");
            setAboutActive("nav-link"); 
        }
    }

    return (
        <nav>
            <Link to="/about" onClick={setActivePage} className={aboutActive} >about</Link>
			<Link to="/projects" onClick={setActivePage} className={projectsActive} >projects</Link>
        </nav>
    )
}

export default Nav;