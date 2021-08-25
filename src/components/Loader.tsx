import styled from "styled-components";
import { motion } from "framer-motion";

const StyledLoader = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 2.5rem;
        text-align: center;
        @media screen and (min-width: 1024px) {
            font-size: 5rem;
        }
    }
`;

const Loader = () => {
    return (
        <StyledLoader
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>Hang on...</h1>
        </StyledLoader>
    );
};

export default Loader;
