import React, { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { FaAngleUp } from "react-icons/fa";
import particlesOptions from "./particles.json";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import ProjectsCard from "./components/ProjectsCard/ProjectsCard";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import "./App.css";


function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const aboutRef = useRef(null);
    const topRef = useRef(null);

    const handleClickAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleClickTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="App">
           {init && <Particles options={particlesOptions} />}
           
            <div className="knowBtn" ref={topRef}>
                <Home />

                <div className="flex items-center justify-center">
                    <span onClick={handleClickAbout} className="f3 tc no-underline inline-flex items-center ba br4 pointer animate__animated animate__zoomInUp">
                        <h3>Know more</h3>
                    </span>
                </div>
            </div>

            <div ref={aboutRef}>
                <About />
            </div>

            <div>
                <ProjectsCard />
            </div>
            
            <div>
                <Contacts />
            </div>
             
            <div>
                <div className='tc'>
                    <FaAngleUp onClick={handleClickTop} className="top icon" />
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default App;
