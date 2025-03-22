import React from "react";
import Weather from "../Weather/Weather";
import {
    getCity,
    getHumidity,
    getTemp,
    getWeather,
    getWindSpeed,
    getLoaded,
    getIsLoading,
} from "../../redux/selectors/appSelectors";
import { connect } from "react-redux";
import { getData } from "../../redux/reducers/appReducer";
import { S_WeatherContainer, S_WeatherSection } from "./WeatherSectionStyles";

function WeatherSection({
    city,
    temp,
    weather,
    humidity,
    windSpeed,
    loaded,
    isLoading,
    getData,
}) {
    return (
        <S_WeatherSection>
            <S_WeatherContainer>
                <Weather
                    city={city}
                    temp={temp}
                    weather={weather}
                    humidity={humidity}
                    windSpeed={windSpeed}
                    loaded={loaded}
                    isLoading={isLoading}
                    getData={getData}
                />
            </S_WeatherContainer>
        </S_WeatherSection>
    );
}

const mapStateToProps = state => ({
    city: getCity(state),
    temp: getTemp(state),
    weather: getWeather(state),
    humidity: getHumidity(state),
    windSpeed: getWindSpeed(state),
    loaded: getLoaded(state),
    isLoading: getIsLoading(state),
});

export default connect(mapStateToProps, {
    getData,
})(WeatherSection);
