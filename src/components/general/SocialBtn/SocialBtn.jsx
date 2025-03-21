import React from "react";
import styled from "styled-components";
import RoundBtn from "../RoundBtn/RoundBtn";

const SocialBtnStyled = styled.button`
    button {
        background: rgba(217, 217, 217, 0.1);
    }
`;

export default function SocialBtn({ children }) {
    return (
        <SocialBtnStyled>
            <RoundBtn>{children}</RoundBtn>
        </SocialBtnStyled>
    );
}
