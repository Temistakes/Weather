import React from "react";
import styled from "styled-components";

const RoundBtnStyled = styled.button`
    height: 3.75rem;
    min-width: 3.75rem;
    width: 3.75rem;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.09375rem solid white;
`;

export default function RoundBtn({ children, cls, style }) {
    return (
        <RoundBtnStyled style={style} className={cls}>
            {children}
        </RoundBtnStyled>
    );
}
