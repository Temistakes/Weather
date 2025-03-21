import React from "react";
import styled from "styled-components";
import Weather from "../Weather/Weather";
import {
    getCity,
    getHumidity,
    getTemp,
    getWeather,
    getWindSpeed,
    getLoaded,
} from "../../redux/selectors/appSelectors";
import { connect } from "react-redux";
import { getData } from "../../redux/reducers/appReducer";

const WeatherSectionStyled = styled.section`
    height: 100vh;
    width: 100%;
    background: rgb(151, 151, 151)
        url("https://avatars.mds.yandex.net/get-vertis-journal/4465444/kiril-dobrev-v63UL8s28Ew-unsplash.jpg_1723961098949/1600x1600")
        no-repeat center / cover;
    background-blend-mode: multiply;

    .container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

function WeatherSection({
    city,
    temp,
    weather,
    humidity,
    windSpeed,
    loaded,
    getData,
}) {
    return (
        <WeatherSectionStyled>
            <div className="container">
                <Weather
                    city={city}
                    temp={temp}
                    weather={weather}
                    humidity={humidity}
                    windSpeed={windSpeed}
                    loaded={loaded}
                    getData={getData}
                />
            </div>
        </WeatherSectionStyled>
    );
}

const mapStateToProps = state => ({
    city: getCity(state),
    temp: getTemp(state),
    weather: getWeather(state),
    humidity: getHumidity(state),
    windSpeed: getWindSpeed(state),
    loaded: getLoaded(state),
});

export default connect(mapStateToProps, {
    getData,
})(WeatherSection);
