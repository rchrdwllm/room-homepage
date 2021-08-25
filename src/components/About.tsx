import aboutDark from "../images/image-about-dark.jpg";
import aboutLight from "../images/image-about-light.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledAbout = styled(motion.section)`
    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    .img-container {
        position: relative;
        width: 100%;
        overflow: hidden;
        .revealer {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 100%;
            background-color: var(--white);
            z-index: 1;
        }
        img {
            display: block;
            height: 100%;
            object-fit: cover;
        }
    }
    .content {
        padding: 3rem 1.5rem;
        @media screen and (min-width: 768px) {
            padding: 5rem 3rem;
        }
        h4 {
            text-transform: uppercase;
            letter-spacing: 6px;
        }
        p {
            margin-top: 1rem;
        }
    }
`;

const About = () => {
    return (
        <StyledAbout layout>
            <div className="img-container">
                <motion.div
                    className="revealer"
                    initial={{ width: "100%" }}
                    animate={{
                        width: 0,
                        transition: {
                            ease: [0.87, 0, 0.13, 1],
                            duration: 1.5,
                            delay: 0.25,
                        },
                    }}
                ></motion.div>
                <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{
                        scale: 1,
                        transition: {
                            ease: [0.87, 0, 0.13, 1],
                            duration: 1.5,
                            delay: 0.25,
                        },
                    }}
                    src={aboutDark}
                    alt="chair"
                />
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.25 } }}
                className="content"
            >
                <h4>About our furniture</h4>
                <p>
                    Our multifunctional collection blends design and function to
                    suit your individual taste. Make each room unique, or pick a
                    cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from
                    traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your
                    dream space.
                </p>
            </motion.div>
            <div className="img-container">
                <motion.div
                    className="revealer"
                    initial={{ width: "100%" }}
                    animate={{
                        width: 0,
                        transition: {
                            ease: [0.87, 0, 0.13, 1],
                            duration: 1.5,
                            delay: 0.5,
                        },
                    }}
                ></motion.div>
                <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{
                        scale: 1,
                        transition: {
                            ease: [0.87, 0, 0.13, 1],
                            duration: 1.5,
                            delay: 0.5,
                        },
                    }}
                    src={aboutLight}
                    alt="chair"
                />
            </div>
        </StyledAbout>
    );
};

export default About;
