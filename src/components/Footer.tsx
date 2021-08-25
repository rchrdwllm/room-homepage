import styled from "styled-components";
import { motion } from "framer-motion";

const StyledFooter = styled(motion.footer)`
    background-color: var(--black);
    padding: 3rem;
    text-align: center;
    p {
        color: var(--gray);
        a {
            color: var(--white);
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooter layout>
            <p>
                Challenge by{" "}
                <a
                    href="https://frontendmentor.io/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Frontend Mentor.
                </a>{" "}
                Coded by{" "}
                <a
                    href="https://rchrdwllm.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Richard William.
                </a>
            </p>
        </StyledFooter>
    );
};

export default Footer;
