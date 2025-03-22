import styled from "styled-components";

// Base

export const S_Container = styled.div`
    max-width: calc(90rem + 2.5rem);
    width: 100%;
    margin: 0 auto;
    padding: 0 1.25rem;
`;

export const S_Main = styled.main`
    min-height: 100vh;
`;

// Buttons

export const S_RoundBtn = styled.button`
    height: 3.75rem;
    min-width: 3.75rem;
    width: 3.75rem;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.09375rem solid white;
    color: black;
    transition: 0.3s;

    &:hover {
        background: black;
        border-color: black;
        color: white;
    }
`;

export const S_SocialBtn = styled(S_RoundBtn)`
    background: rgba(217, 217, 217, 0.1);
`;

// Text

export const S_Title = styled.h1`
    font-weight: 600;
    font-size: 2.5rem;
    word-break: break-all;
`;

// Inputs

export const S_InputGroup = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    background-blend-mode: multiply;
    border-radius: 3.44rem;
    padding-right: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.1);
    transition: border-color 0.3s ease;

    input {
        width: 100%;
        padding: 1.125rem 1rem 1.125rem 2.5rem;
        font-size: 1.88rem;

        &::placeholder {
            color: rgba(255, 255, 255, 0.3);
        }
    }

    &.error {
        border-color: tomato;
    }
`;
