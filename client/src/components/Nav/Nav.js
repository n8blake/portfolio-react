import React from "react";
import 'nav.scss';

function Nav() {
    return (
        <nav>
            <a href="#" id="about-link" data-target="about" className="nav-link active" >about</a>
			<a href="#" id="projects-link" data-target="projects" className="nav-link" >projects</a>
        </nav>
    )
}

export default Nav;