import React from "react";
import Container  from "react-bootstrap/Container";
import { FaGithub, FaLinkedinIn, FaTwitter, FaStackOverflow, FaCopyright} from "react-icons/fa";



function Footer() {
    return (
        <Container className="footer tc">
                {/** In each URL write the URL of your account*/}
                <a href="" target="_blank">
                  <FaGithub  className="icon ma3"/>  
                </a>
                <a href="" target="_blank">
                   <FaLinkedinIn  className="icon ma3"/> 
                </a>
                
                <a href="" target="_blank">
                   <FaTwitter  className="icon ma3"/> 
                </a>

                <a href="" target="_blank">
                   <FaStackOverflow  className="icon ma3"/> 
                </a>
                <hr/>

                <h6 className="mt3">
                    <FaCopyright  className="copy"/>
                    <a href="https://github.com/BlueButterflies" target="_blank">
                        {"2024 - Template developed by S/Z Siyana Zdravkova Web Developer"}
                    </a>
                </h6>
        </Container>
    );

}

export default Footer