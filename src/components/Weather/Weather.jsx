import React, { useRef } from "react";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import WeatherForm from "../WeatherForm/WeatherForm";
import { S_Weather, S_ContentWrap } from "./WeatherStyles";
import Loader from "../common/Loader/Loader";
import { Transition } from "react-transition-group";
import WeatherSocials from "../WeatherSocials/WeatherSocials";

export default function Weather({ loaded, isLoading, ...props }) {
    const nodeRef = useRef(null);

    return (
        <S_Weather>
            <WeatherForm getData={props.getData} />
            <S_ContentWrap
                className={(!loaded && isLoading) || loaded ? "" : "none"}
            >
                <Transition nodeRef={nodeRef} in={isLoading} timeout="300">
                    {state => <Loader className={state} />}
                </Transition>
                <Transition
                    nodeRef={nodeRef}
                    in={loaded && !isLoading}
                    timeout="300"
                >
                    {state => <WeatherInfo {...props} className={state} />}
                </Transition>
            </S_ContentWrap>
            <WeatherSocials />
        </S_Weather>
    );
}
