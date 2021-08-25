import { createGlobalStyle } from "styled-components";
import Colors from "./colors";

const GlobalStyles = createGlobalStyle`
    ${Colors};
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Spartan';
    }
    body {
        font-weight: 500;
        font-size: 0.75rem;
        color: var(--gray);
        @media screen and (min-width: 1920px) {
            font-size: 0.875rem;
        }
        a {
            color: inherit;
            text-decoration: none;
        }
        p {
            line-height: 175%;
        }
        button {
            display: block;
            outline: none;
            border: none;
            background-color: transparent;
            font-weight: inherit;
            font-size: inherit;
            cursor: pointer;
        }
        img {
            width: 100%;
        }
        ul {
            list-style: none;
        }
        h1, h2, h3, h4, h5, h6 {
            color: var(--black);
        }
    }
`;

export default GlobalStyles;
