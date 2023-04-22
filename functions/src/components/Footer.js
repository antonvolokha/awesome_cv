import React from "react";
import {githublink} from "../constants";

const Footer = () => {
    return (
        <footer className="bg-primary content-center text-center font-medium p-3.5">
            <small>
                Give me a star on <a href={githublink} className="footerlink">GitHub</a>.
                {/*You can help me on <a href="https://patreon.com/johenews" className="footerlink">Patreon</a>.*/}
            </small>
        </footer>
    );
};

export default Footer;