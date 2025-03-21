import React from "react";
import styled from "styled-components";
import cls from "classnames";

const WeatherInfoStyled = styled.div`
    .title {
        font-weight: 600;
        font-size: 2.5rem;
        word-break: break-all;
    }

    .temp {
        font-weight: 800;
        font-size: 3.12rem;
        margin-bottom: 0.5rem;
    }

    .weather-list {
        display: flex;
        flex-direction: column;
    }

    .weather-list li {
        font-weight: 500;
        font-size: 1.25rem;

        &::before {
            margin-right: 0.75rem;
        }
    }

    .weather {
        margin-bottom: 0.5rem;
    }
`;

export default function WeatherInfo({
    city,
    weather,
    humidity,
    windSpeed,
    temp,
}) {
    return (
        <WeatherInfoStyled>
            <h1 className="title">Погода в городе {city}</h1>
            <span className="temp">{temp}</span>
            <ul className="weather-list">
                <li className={cls(weather.icon, "weather")}>
                    {weather.weather}
                </li>
                <li>Влажность: {humidity}</li>
                <li>Скорость ветра: {windSpeed} км/ч</li>
            </ul>
        </WeatherInfoStyled>
    );
}
