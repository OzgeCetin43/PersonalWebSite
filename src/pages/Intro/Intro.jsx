import React from "react";
import {
    IntroContainer,
    IntroInnerContainer,
} from "./IntroStyle";

import me from "../../assets/Images/me.png";
import { motion } from "framer-motion";

const Intro = (props)  => {
    return (
        <IntroContainer initial={{height: 0}} animate={{height: "40vh"}} transition={{type: "spring", duration: 2, delay: 1}}>
            <IntroInnerContainer>
                <h1>Hello!</h1>
                <h2>I'm Özge Çetin</h2>
                <p>Junior Developer</p>
            </IntroInnerContainer>
            <IntroInnerContainer>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 2, delay: 1 }}>
                    <img src={me} alt="No internet connection..."/>
                </motion.div>
            </IntroInnerContainer>
        </IntroContainer>
    );
}

export default Intro;