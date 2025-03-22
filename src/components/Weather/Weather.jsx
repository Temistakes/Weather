import React, { useState, useRef } from "react";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import WeatherForm from "../WeatherForm/WeatherForm";
import { S_Weather, S_Socials, S_ContentWrap } from "./WeatherStyles";
import { S_SocialBtn } from "../../styles/components";
import Loader from "../common/Loader/Loader";
import { Transition } from "react-transition-group";

export default function Weather({ loaded, isLoading, ...props }) {
    const nodeRef = useRef(null);

    return (
        <S_Weather>
            <WeatherForm getData={props.getData} />
            <S_ContentWrap>
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
            <S_Socials>
                <S_SocialBtn>
                    <svg
                        width="14"
                        height="25"
                        viewBox="0 0 14 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.5122 14.0625L13.2065 9.53809H8.86523V6.60205C8.86523 5.36426 9.47168 4.15771 11.416 4.15771H13.3896V0.305664C13.3896 0.305664 11.5986 0 9.88623 0C6.31104 0 3.97412 2.16699 3.97412 6.08984V9.53809H0V14.0625H3.97412V25H8.86523V14.0625H12.5122Z"
                            fill="#F7F7F7"
                        />
                    </svg>
                </S_SocialBtn>
                <S_SocialBtn>
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_8_26)">
                            <path
                                d="M23.4302 9.408C23.446 9.63007 23.446 9.85219 23.446 10.0743C23.446 16.8477 18.2906 24.6523 8.86802 24.6523C5.96509 24.6523 3.26841 23.8115 1 22.3522C1.41245 22.3997 1.80898 22.4156 2.2373 22.4156C4.63257 22.4156 6.83755 21.6066 8.59834 20.2266C6.3458 20.1789 4.45811 18.7037 3.80771 16.6732C4.125 16.7208 4.44224 16.7525 4.77539 16.7525C5.2354 16.7525 5.69546 16.6891 6.12373 16.5781C3.77603 16.1021 2.01519 14.04 2.01519 11.5495V11.4861C2.69727 11.8668 3.49048 12.1047 4.33115 12.1364C2.95107 11.2164 2.04692 9.64594 2.04692 7.86928C2.04692 6.91752 2.30068 6.04506 2.74487 5.28364C5.26709 8.39277 9.05835 10.4232 13.3096 10.6453C13.2303 10.2646 13.1827 9.86806 13.1827 9.47148C13.1827 6.64785 15.4669 4.34775 18.3064 4.34775C19.7816 4.34775 21.1141 4.9664 22.05 5.96577C23.208 5.7437 24.3184 5.31537 25.302 4.72846C24.9212 5.91821 24.1122 6.91757 23.0494 7.55204C24.0805 7.44106 25.0799 7.15546 25.9999 6.75893C25.302 7.77411 24.4295 8.67827 23.4302 9.408Z"
                                fill="#F7F7F7"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_8_26">
                                <rect width="25" height="25" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </S_SocialBtn>
                <S_SocialBtn>
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.45898 21.875H1.92383V7.27051H6.45898V21.875ZM4.18896 5.27832C2.73877 5.27832 1.5625 4.07715 1.5625 2.62695C1.5625 1.93037 1.83922 1.26232 2.33177 0.769762C2.82433 0.277204 3.49238 0.000488281 4.18896 0.000488281C4.88555 0.000488281 5.5536 0.277204 6.04616 0.769762C6.53871 1.26232 6.81543 1.93037 6.81543 2.62695C6.81543 4.07715 5.63867 5.27832 4.18896 5.27832ZM23.4326 21.875H18.9072V14.7656C18.9072 13.0713 18.873 10.8984 16.5493 10.8984C14.1914 10.8984 13.8301 12.7393 13.8301 14.6436V21.875H9.29981V7.27051H13.6494V9.2627H13.7129C14.3184 8.11523 15.7974 6.9043 18.0039 6.9043C22.5938 6.9043 23.4375 9.92676 23.4375 13.8525V21.875H23.4326Z"
                            fill="#F7F7F7"
                        />
                    </svg>
                </S_SocialBtn>
            </S_Socials>
        </S_Weather>
    );
}
