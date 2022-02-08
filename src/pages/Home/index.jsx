import React, { useState } from "react";
import Logo from "../../components/Logo/Logo";
import PowerButton from "../../components/PowerButton";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Intro from "../Intro/Intro";
import ParticleBackground from "../../components/ParticleBackground/ParticleBacground";
import {
    HomeContainer,
    HomeInnerContainer,
    ColoredBackground,
    CharacterContainer,
    ClickText,
    ContactLink,
    AboutLink,
    EducationExperienceLink,
    BottomContainer,
    ProjectsLink,
    ContactMeLink,
} from "./HomeStyle";

import { motion } from "framer-motion";

import me from "../../assets/Images/me.png";

const Home = (props) => {
    const [clickMe, setClickMe] = useState(false);

    const clickMeHandler = () => {
        setClickMe(prevState => !prevState);
    }

    console.log(clickMe);

    return (
        <HomeContainer>
            <ParticleBackground/>
            <ColoredBackground click={clickMe}/>
            <HomeInnerContainer>
                <PowerButton/>
                <Logo/>
                <SocialMedia/>
                <CharacterContainer click={clickMe}>
                    <img src={me} width={clickMe ? 150 : 400} onClick={clickMeHandler}/>
                    <ClickText click={clickMe}>Click Me!</ClickText>
                </CharacterContainer>

                <ContactLink target="_blank" to={{pathname: "mailto:ozgecetin43@gmail.com"}}>
                    <motion.h1 whileHover={{scale: 1.1}} whileTap={{scale: 0.8}}>Say Hello!</motion.h1>
                </ContactLink>

                <AboutLink to="/about" click = {clickMe}>
                    <motion.h1 whileHover={{scale: 1.1}} whileTap={{scale: 0.8}}>About Me!</motion.h1>
                </AboutLink>

                <EducationExperienceLink to="/educationexperience">
                    <motion.h1 whileHover={{scale: 1.1}} whileTap={{scale: 0.8}}>Education & Experience!</motion.h1>
                </EducationExperienceLink>

                <BottomContainer>
                    <ProjectsLink to="/projects" click = {clickMe}>
                        <motion.h1 whileHover={{scale: 1.1}} whileTap={{scale: 0.8}}>Projects!</motion.h1>
                    </ProjectsLink>

                    <ContactMeLink to="/contact">
                        <motion.h1 whileHover={{scale: 1.1}} whileTap={{scale: 0.8}}>Contact Me!</motion.h1>
                    </ContactMeLink>
                </BottomContainer>
            </HomeInnerContainer>
            {clickMe && <Intro click={clickMe}/>}
        </HomeContainer>
    );
}

export default Home;