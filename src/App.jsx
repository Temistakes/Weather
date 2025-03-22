import WeatherSection from "./components/WeatherSection/WeatherSection";
import { S_Main } from "./styles/components";
import GlobalStyles from "./styles/base";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

export default function App() {
    return (
        <>
            <S_Main>
                <WeatherSection />
            </S_Main>
            <GlobalStyles />
        </>
    );
}
