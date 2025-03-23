import axios from "axios";
import { trunc } from "../utils/utils";

const instance = axios.create({
    baseURL: "https://us1.locationiq.com/v1/",
});

export const cityAPI = {

    getCoords(city) {
        return instance.get(`/search?key=pk.32d4d2c796e9bcd01465c3c97b842f1e&q=${encodeURI(city)}&format=json`).then(response => {
            console.log(response);
            const [lat, lon] = response.data[0].boundingbox;
            return [trunc(+lat, 2), trunc(+lon, 2)];
        });
    },

    // getCity(coords) {
    //     return instance.get(`/search?key=pk.32d4d2c796e9bcd01465c3c97b842f1e&lat=${coords[0]}&lon=${coords[1]}&format=json`).then(response => {
    //         console.log(response);
    //     });
    // },

}