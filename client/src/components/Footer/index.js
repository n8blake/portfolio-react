import React from "react";
import './footer.scss';

function Footer() {
    return (
        <footer>
            <div className="footer-text">Find me on</div>
            <div className="footer-links">
                <a href="https://github.com/n8blake" target="_blank" className="github">GitHub</a> 
                <a href="https://twitter.com/n8blake" target="_blank" className="twitter">Twitter</a> 
                <a href="https://www.instagram.com/n8blake/" target="_blank" className="instagram">Instagram</a> 
                <a href="https://www.youtube.com/user/n8blake" target="_blank" className="youtube">YouTube</a>
            </div>
	    </footer>
    );
}

export default Footer;