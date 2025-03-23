import WeatherSection from "./components/WeatherSection/WeatherSection";
import { S_Main } from "./styles/components";
import GlobalStyles from "./styles/base";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { getData } from "./redux/reducers/appReducer";
import { connect } from "react-redux";
import { trunc } from "./utils/utils";

library.add(far, fas);

function App({ getData }) {
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const coords = position.coords;
            const resultCoords = [
                trunc(coords.latitude, 2),
                trunc(coords.longitude, 2),
            ];

            getData({ isCity: false, coords: resultCoords });
        });
    }, []);

    return (
        <>
            <S_Main>
                <WeatherSection />
            </S_Main>
            <GlobalStyles />
        </>
    );
}

export default connect(null, {
    getData,
})(App);
