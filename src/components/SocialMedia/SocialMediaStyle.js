import styled from "styled-components";

export const SocialMediaContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 2rem;

    &>*:not(:last-child) {
        margin: 0.4rem 0;
    }
`;

export const VerticalLine = styled.div `
    height: 8rem;
    width: 2px;
    background-color: #212121;
`;