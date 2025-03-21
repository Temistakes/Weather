import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.open-meteo.com/v1/forecast/",
});

export const weatherAPI = {

    getData(lat, lon) {
        return instance.get("/", {
            params: {
                forecast_days: 1,
                latitude: lat,
                longitude: lon,
                current: "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
            },
        }).then(response => {
            const data = response.data;

            return {
                temp: `${data.current.temperature_2m}${data.current_units.temperature_2m}`,
                weather: `${data.current.weather_code}`,
                humidity: `${data.current.relative_humidity_2m}${data.current_units.relative_humidity_2m}`,
                windSpeed: `${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`,
            }
        });
    },

}