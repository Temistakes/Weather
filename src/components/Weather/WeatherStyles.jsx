import styled from "styled-components";

export const S_Weather = styled.section`
    max-width: 47.5rem;
    width: 100%;
    min-height: 20rem;
    border-radius: 3.44rem;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 3.3125rem 4.375rem 2.6875rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.8);

    @media all and (max-width: 600px) {
        & {
            min-height: 13rem;
            max-height: 100%;
            padding: 2rem 1.5rem;
            overflow: auto;
            border-radius: 1.75rem;
        }
    }
`;

export const S_ContentWrap = styled.section`
    position: relative;
    height: 16.625rem;
    overflow: auto;

    &.none {
        display: none;
    }
`;
