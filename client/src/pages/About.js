import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import portrait from "./images/self_portrait_sm.png"
import "./About.scss";

function About(){

    const [ aboutInfo, setAboutInfo ] = useState([]);

    return(
        <section className="section active" id="about-section">
			<img className="about-image" src={portrait} />
			<p>Hi, I'm Nate Blake. I'm a freelance graphic artist and web developer. </p>
			<p>I specialize in high quaility, visually engaging and artistic single-page web applications. I use a variety of tools and technologies to bring the best of what the industry has to offer to any project I work on.</p>
            <p> If you are interested in working with me please <a href="mailto: hello@blake-ink.com">shoot me an email!</a></p>
            <hr />
            <div>
                <h3>Design &amp; Development Philosophy</h3>
                <p>Software Development is like modern day mechanics, and like in the workshop, there a many tools and utilities to choose from to accomplish a task. Some are more suited for a particular task than others, some are interchangeable and are used based on preference. The important thing is finding the right tool for the job and knowing how to use it.
</p>
            </div>
            <hr />
            <div>
                <h3>Tools &amp; Technology</h3>
                <p>What I enjoy the most about basic front end web technologies (HTML/CSS and plain JavaScript) is the universality and simplicity in implementation. Modern web browsers have come so far in their native power, with nothing more than a plain text editor, you can create an incredibly dynamic and interactive product which can be deployed by simply dropping the html file on a web server. </p>
                <p>More complex projects require a more robust software infrastructure. Full stack development is key in the successful development and deployment of modern projects. Knowing how to control and handle application state, manage users, protect data, and organize a complex code base, etc. requires resources and skilled developers to produce and maintain. I tackle these things project by project, learning new skills to develop the best result for the task. </p>
            </div>
        </section>
    )

}

export default About;