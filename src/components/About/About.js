import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import ProfilImage from "./profilImage.jpg";

function About() {
    return (
        <div className="about tc">
            <Container>
                <Row className="tc">
                    <Col sm={"12"} md={"6"} xs={"12"}>
                        <Image src={ProfilImage} roundedCircle fluid className="imgLogo" />
                    </Col>
                    <Col className="tc" sm={"12"} md={"6"} xs={"12"}>
                        <div className="tc animate__animated animate__zoomInUp animate__delay-2s">
                            <div className="titleAbout tc">
                                <h1>
                                    About me
                                </h1>
                            </div>

                            <div className="description f3">
                                    {/**Write how are you*/}
                                    This is where you can describe about yourself.
                                    The more you describe about yourself, the more chances you have!
                                    Extra Information about you! like hobbies and your goals.
                            </div>
                        </div>
                    </Col>
                </Row> 
            </Container>
            
        </div>
        
    );
}

export default About