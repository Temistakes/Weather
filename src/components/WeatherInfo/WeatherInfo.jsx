import React from "react";
import { S_Temp, S_List, S_WeatherInfo } from "./WeatherInfoStyles";
import { S_Title } from "../../styles/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WeatherInfo({
    city,
    weather,
    humidity,
    windSpeed,
    temp,
    ...props
}) {
    return (
        <S_WeatherInfo {...props}>
            <S_Title>Погода в городе {city}</S_Title>
            <S_Temp>{temp}</S_Temp>
            <S_List>
                <li>
                    <FontAwesomeIcon icon={weather.icon} />
                    {weather.weather}
                </li>
                <li>Влажность: {humidity}</li>
                <li>Скорость ветра: {windSpeed} км/ч</li>
            </S_List>
        </S_WeatherInfo>
    );
}
