import React from "react";
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className="footer" >
            <div className="socials">
                <FontAwesomeIcon icon={faFacebookSquare} />
                <FontAwesomeIcon icon={faInstagramSquare} />
                <FontAwesomeIcon icon={faTwitterSquare} />
                <FontAwesomeIcon icon={faYoutubeSquare} />
            </div>
            <div className="terms">
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>
            <p className="copyright">&copy; 2023 Movie Box</p>
        </div>
    )
}

export default Footer;