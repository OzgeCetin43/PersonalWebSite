import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div `
    position: relative;
    background: ${props => props.theme.body}
    overflow: hidden;
    width: 100%;
    height: 100vh;
    z-index: 3;
`;

export const HomeInnerContainer = styled.div `
    padding: 2rem;
`;

export const ColoredBackground = styled.div `
    position: absolute;
    top: 0;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0'};
    height: ${props => props.click ? '100%' : '0'};
    z-index: -1;
    background-color: #7986CB;
    transition: height 0.5s ease, width 1s ease 0.5s;
`;

export const CharacterContainer = styled.button `
    position: absolute;
    top: ${props => props.click ? '85%' :'50%'  };
    left: ${props => props.click ? '90%' :'50%'  };
    transform: translate(-50%,-50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;

    @media(max-width: 500pxy) {
        left: ${props => props.click ? '80%' :'50%'  };
    }
`;

export const ClickText = styled.p `
    font-size: 32px;
    position: relative;
    bottom: 180px;
    font-family: 'Yellowtail', cursive;
    font-weight: bolder;
    display: ${props => props.click ? "none" : "inline"}
`;

export const ContactLink = styled(NavLink) `
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: #212121;
    font-family: 'Yellowtail', cursive;
    font-size: 14px;

    @media(max-width: 384px) {
        right: 1rem;
    }
`;

export const EducationExperienceLink = styled(NavLink) `
    position: absolute;
    top: 50%;
    right: -4rem;
    color: #212121;
    transform: rotate(90deg);
    font-family: 'Yellowtail', cursive;
    font-size: 14px;

    @media(max-width: 390px) {
        right: -5rem;
    }

    @media(max-width: 360px) {
        right: -6rem;
    }
`;

export const AboutLink = styled(NavLink) `
    position: absolute;
    top: 50%;
    left: -0.5rem;
    color: #212121;
    transform: rotate(-90deg);
    font-family: 'Yellowtail', cursive;
    font-size: 14px;
    @media(max-width: 500px) {
        left: -1rem;
    }
`;

export const BottomContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0.5rem;
`;

export const ProjectsLink = styled(NavLink) `
    color: #212121;
    font-family: 'Yellowtail', cursive;
    font-size: 14px;
    color: #212121;
`;

export const ContactMeLink = styled(NavLink) `
    color: #212121;
    font-family: 'Yellowtail', cursive;
    font-size: 14px;
`;