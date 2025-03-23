import styled from "styled-components";

export const S_WeatherInfo = styled.div`
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

export const S_Temp = styled.span`
    font-weight: 800;
    font-size: 3.12rem;
    margin-bottom: 1rem;
    margin-top: 1.5rem;

    @media all and (max-width: 600px) {
        font-size: 2.5rem;
        margin-top: 1rem;
    }
`;

export const S_List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & li {
        font-weight: 500;
        font-size: 1.25rem;

        &:first-child {
            margin-bottom: 0.5rem;
        }

        svg {
            margin-right: 0.75rem;
        }
    }

    @media all and (max-width: 600px) {
        & li {
            font-size: 1.125rem;
        }
    }
`;
