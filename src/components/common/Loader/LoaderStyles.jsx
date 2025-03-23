import styled from "styled-components";

export const S_LoaderCircle = styled.div`
    width: 48px;
    height: 48px;
    border: 3px solid #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    &::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 3px solid;
        border-color: #9dff00 transparent;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const S_Loader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 2.5rem;
    transition: all 0.3s ease;

    &.entering,
    &.entered {
        opacity: 1;
        transform: scale(1);
    }

    &.exiting,
    &.exited {
        position: absolute;
        top: 0;
        opacity: 0;
        transform: scale(0);
    }
`;
