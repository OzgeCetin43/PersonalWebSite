import react from "react";
import { NavLink } from "react-router-dom";
import { Github, Instagram, LinkedIn } from "../AllSvg";
import {
    SocialMediaContainer,
    VerticalLine
} from "./SocialMediaStyle";

const SocialMedia = (props) => {
    return (
        <SocialMediaContainer>
            <NavLink target="_blank" to={{pathname: "https://github.com/OzgeCetin43"}}>
                <Github width={25} height={25}/>
            </NavLink>
            <NavLink target="_blank" to={{pathname: "https://www.linkedin.com/in/%C3%B6zge-%C3%A7etin-02216116a/"}}>
                <LinkedIn width={25} height={25}/>
            </NavLink>
            <VerticalLine/>
        </SocialMediaContainer>
    );
}

export default SocialMedia;