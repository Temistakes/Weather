import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        border: none;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    a,
    a:link,
    a:visited {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    aside,
    nav,
    footer,
    header,
    section,
    main {
        display: block;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        font-size: inherit;
        font-weight: inherit;
    }

    ul,
    ul li {
        list-style: none;
    }

    img {
        vertical-align: top;
    }

    img,
    svg {
        max-width: 100%;
        height: auto;
    }

    address {
        font-style: normal;
    }

    input,
    textarea,
    button,
    select {
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        background-color: transparent;
    }

    input::-ms-clear {
        display: none;
    }

    button,
    input[type="submit"] {
        display: inline-block;
        box-shadow: none;
        background-color: transparent;
        background: none;
        cursor: pointer;
    }

    input:focus,
    input:active,
    button:focus,
    button:active {
        outline: none;
    }

    button::-moz-focus-inner {
        padding: 0;
        border: 0;
    }

    label {
        cursor: pointer;
    }

    legend {
        display: block;
    }

    svg,
    img,
    video {
        max-width: 100%;
        height: auto;
    }

    span,
    label,
    a,
    button {
        display: inline-block;
    }

    a,
    button {
        color: inherit;
        background: none;
        transition: 0.5s;
    }

    html {
        font-size: 16px;
        scroll-behavior: smooth;
    }

    body {
        font-size: 1rem;
        font-weight: 400;
        font-style: normal;
        line-height: normal;
        font-family: "Montserrat", sans-serif;
    }

    ::-webkit-scrollbar {
    width: 0.5rem;
    border-radius: 1.25rem;
}

    ::-webkit-scrollbar-track {
        background-color: rgba(255, 255, 255, 0.3);
    }

    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6.25rem ;
        border: 2rem solid white;
        border-radius: 2rem;
    }
`;
