import styled from "styled-components";
import {motion} from "framer-motion";

export const IntroContainer = styled(motion.div) `
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 40vh;
    background: linear-gradient(
        to right,
        #fff 50%,
        #7986CB 50%) bottom,
        linear-gradient(
        to right,
        #fff 50%,
        #7986CB 50%) top;

    border-left: 3px solid #fff;
    border-right: 3px solid #7986CB;
    z-index: -1;
`;

export const IntroInnerContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50%;
    padding: 10px;
    text-align: center;

    h1 {
        font-size: 40px;
        padding: 10px;
        color: #212121;
    }

    h2 {
        color: #7986CB;
        font-size: 30px;
        padding: 10px;
    }

    p {
        color: #212121;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
    }

    img {
        position: relative;
        top: -325px;
        height: 165%;
    }
`;