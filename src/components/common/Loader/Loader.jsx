import React from "react";
import { S_Loader, S_LoaderCircle } from "./LoaderStyles";

export default function Loader(props) {
    return (
        <S_Loader {...props}>
            <S_LoaderCircle></S_LoaderCircle>
        </S_Loader>
    );
}
