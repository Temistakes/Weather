import styled from "styled-components";
import { S_Container } from "../../styles/components";

export const S_WeatherSection = styled.section`
    height: 100vh;
    width: 100%;
    background: rgb(151, 151, 151)
        url("https://avatars.mds.yandex.net/get-vertis-journal/4465444/kiril-dobrev-v63UL8s28Ew-unsplash.jpg_1723961098949/1600x1600")
        no-repeat center / cover;
    background-blend-mode: multiply;
`;

export const S_WeatherContainer = styled(S_Container)`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
