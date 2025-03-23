import { weatherAPI } from "../../api/weatherAPI";
import { cityAPI } from "../../api/cityAPI";
import { weatherCodes } from "../../utils/weatherCodes";

const SET_DATA = "weather/app/SET_DATA";
const SET_LOADING = "weather/app/SET_LOADING";
const SET_CITY = "weather/app/SET_CITY";
const SET_LOADED = "weather/app/SET_LOADED";

let initialState = {
    isLoading: false,
    temp: "?",
    weather: {
        weather: "Не определено",
        icon: "fa-solid fa-ban",
    },
    humidity: "?",
    windSpeed: "?",
    city: "?",
    loaded: false,
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case (SET_DATA):
            return {
                ...state,
                ...action.data,
                weather: weatherCodes[action.data.weather],
            }
        case (SET_LOADING):
            return {
                ...state,
                isLoading: action.val,
            }
        case (SET_CITY):
            return {
                ...state,
                city: action.city,
            }
        case (SET_LOADED):
            return {
                ...state,
                loaded: action.val,
            }
        default:
            return state;
    }
}

// Action Creators & Thunk Creators

export const setData = data => ({
    type: SET_DATA,
    data,
});

export const setLoading = val => ({
    type: SET_LOADING,
    val,
});

export const setCity = city => ({
    type: SET_CITY,
    city,
});

export const setLoaded = val => ({
    type: SET_LOADED,
    val,
});

export const getData = (data) => async dispatch => {
    dispatch(setLoading(true));

    try {
        console.log(data.city);
        const coords = data.isCity ? await cityAPI.getCoords(data.city) : data.coords;
        console.log(coords);
        const response = await weatherAPI.getData(...coords);
        dispatch(setData(response));
        dispatch(setCity(data.isCity ? data.city : "'текущий'"));
    }   catch (err) {
        console.error(err);
    }   finally {
        dispatch(setLoading(false));
        dispatch(setLoaded(true));
    }

}