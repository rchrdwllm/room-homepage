import type { FunctionComponent } from "react";
import styled from "styled-components";

const StyledLayout = styled.main`
    min-height: 100vh;
    @media screen and (min-width: 1024px) {
        display: grid;
        gird-template-rows: 1fr auto;
    }
`;

const Layout: FunctionComponent = ({ children }) => {
    return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
