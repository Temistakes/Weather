import styled from "styled-components";
import { S_Container } from "../../styles/components";

export const S_WeatherSection = styled.section`
    height: 100vh;
    width: 100%;
    background: rgb(151, 151, 151) url(${props => props.$background}) no-repeat
        center / cover;
    background-blend-mode: multiply;
`;

export const S_WeatherContainer = styled(S_Container)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
`;
