import styled from "styled-components";

export const Power = styled.button `
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 0.3rem;
    border-radius: 50%;
    outline: none;
    border: none;
    background-color: #fff;

    &:hover {
        box-shadow: 0 0 8px 6px rgba(26, 35, 126, 0.26);
        background-color: rgba(26, 35, 126, 0.26);
    }
`