import logo from "../images/logo.svg";
import burger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useWidth } from "../hooks/useWidth";
import { useEffect } from "react";

const StyledNav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    @media screen and (min-width: 1024px) {
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 3rem;
    }
    @media screen and (min-width: 1024px) {
        padding: 4rem;
    }
    @media screen and (min-width: 1920px) {
        padding: 5rem;
    }
    .container {
        position: relative;
        padding: 3rem 1.5rem;
        @media screen and (min-width: 1024px) {
            padding: 0;
        }
        .burger {
            display: flex;
            justify-content: center;
            align-items: center;
            @media screen and (min-width: 1024px) {
                display: none;
            }
        }
        .logo-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: center;
            align-items: center;
            @media screen and (min-width: 1024px) {
                position: static;
                top: 0;
                left: 0;
                transform: translate(0, 0);
                width: 5rem;
            }
        }
    }
    .menu {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        z-index: 2;
        overflow: hidden;
        @media screen and (min-width: 1024px) {
            position: unset;
        }
        .hidden {
            background-color: var(--white);
            padding: 3rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100vw;
            @media screen and (min-width: 1024px) {
                background-color: transparent;
                padding: 0;
                width: unset;
            }
            .close {
                display: flex;
                justify-content: center;
                align-items: center;
                @media screen and (min-width: 1024px) {
                    display: none;
                }
            }
            .nav-links {
                display: flex;
                @media screen and (min-width: 1024px) {
                    margin-left: 4rem;
                }
                li {
                    &:not(:first-child) {
                        margin-left: 2rem;
                        @media screen and (min-width: 1024px) {
                            margin-left: 3rem;
                        }
                    }
                    a {
                        position: relative;
                        font-weight: 700;
                        color: var(--black);
                        &:hover::before {
                            width: 100%;
                        }
                        &::before {
                            position: absolute;
                            bottom: 0;
                            left: 50%;
                            transform: translateX(-50%);
                            content: "";
                            height: 2px;
                            width: 0;
                            background-color: var(--black);
                            transition: 0.5s width;
                            @media screen and (min-width: 1024px) {
                                background-color: var(--white);
                            }
                        }
                        @media screen and (min-width: 1024px) {
                            color: var(--white);
                            font-weight: 500;
                        }
                    }
                }
            }
        }
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
        pointer-events: none;
        @media screen and (min-width: 1024px) {
            display: none;
        }
    }
`;

const Nav = () => {
    const width = useWidth();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        width >= 1024 ? setIsOpen(true) : setIsOpen(false);
    }, [width]);

    return (
        <StyledNav>
            <div className="container">
                <button className="burger" onClick={() => setIsOpen(true)}>
                    <img src={burger} alt="burger" />
                </button>
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{
                                opacity: 1,
                                width: "100vw",
                                transition: {
                                    ease: [0.87, 0, 0.13, 1],
                                    duration: 1,
                                },
                            }}
                            exit={{
                                opacity: 0,
                                width: 0,
                                transition: {
                                    ease: [0.87, 0, 0.13, 1],
                                    duration: 1,
                                },
                            }}
                            className="menu"
                        >
                            <div className="hidden">
                                <button
                                    className="close"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <img src={close} alt="close" />
                                </button>
                                <ul className="nav-links">
                                    <li>
                                        <a href="/">home</a>
                                    </li>
                                    <li>
                                        <a href="/">shop</a>
                                    </li>
                                    <li>
                                        <a href="/">about</a>
                                    </li>
                                    <li>
                                        <a href="/">contact</a>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="overlay"
                        ></motion.div>
                    </>
                )}
            </AnimatePresence>
        </StyledNav>
    );
};

export default Nav;
