import headerData from "../data/headerData";
import prevIcon from "../images/icon-angle-left.svg";
import nextIcon from "../images/icon-angle-right.svg";
import { useState, useRef } from "react";
import { useWidth } from "../hooks/useWidth";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const StyledHeader = styled.header`
    @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: 60% 40%;
    }
    .slider {
        position: relative;
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
        .slider-container {
            height: 100%;
            display: flex;
            transition: 1s transform cubic-bezier(0.16, 1, 0.3, 1);
            .img-container {
                flex-shrink: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                img {
                    display: block;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
        .slider-btns-container {
            position: absolute;
            bottom: 0;
            right: 0;
            background-color: var(--black);
            display: flex;
            @media screen and (min-width: 1024px) {
                display: none;
            }
            .slider-toggle {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1.25rem 1.5rem;
                transition: 0.5s background-color;
                &:hover {
                    background-color: var(--dark-gray);
                }
                img {
                    width: 75%;
                }
            }
        }
    }
    .content {
        position: relative;
        padding: 5rem 1.5rem;
        overflow: hidden;
        @media screen and (min-width: 768px) {
            padding: 5rem 3rem;
        }
        @media screen and (min-width: 1024px) {
            padding: 5rem;
        }
        @media screen and (min-width: 1920px) {
            padding: 8rem;
        }
        h1 {
            @media screen and (min-width: 1024px) {
                font-size: 2.25rem;
            }
            @media screen and (min-width: 1920px) {
                font-size: 3.5rem;
            }
        }
        p {
            margin-top: 1rem;
        }
        .shop-now {
            display: flex;
            align-items: center;
            margin-top: 3rem;
            width: fit-content;
            &:hover {
                span {
                    color: var(--gray);
                }
                svg path {
                    fill: var(--gray);
                }
            }
            span {
                text-transform: uppercase;
                letter-spacing: 10px;
                color: var(--black);
                transition: 0.5s color;
            }
            svg {
                display: block;
                margin-left: 2rem;
                path {
                    transition: 0.5s fill;
                }
            }
        }
        .slider-btns-container {
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: var(--black);
            display: none;
            @media screen and (min-width: 1024px) {
                display: flex;
            }
            .slider-toggle {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1.25rem 1.5rem;
                transition: 0.5s background-color;
                &:hover {
                    background-color: var(--dark-gray);
                }
                img {
                    width: 75%;
                }
            }
        }
    }
`;

const Header = () => {
    const [inView, setInView] = useState<number>(0);
    const [direction, setDirection] = useState<string>("right");
    const width = useWidth();
    const sliderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            const transformValue = slider.clientWidth * inView;

            slider.style.transform = `translateX(-${transformValue}px)`;
        }
    }, [inView, width]);

    useEffect(() => {
        const changeInView = () => {
            setDirection("right");
            inView >= 2 ? setInView(0) : setInView(inView + 1);
        };

        const timer = setInterval(changeInView, 15000);

        return () => clearInterval(timer);
    }, [inView]);

    return (
        <StyledHeader>
            <motion.div layout className="slider">
                <motion.div
                    className="revealer"
                    initial={{ width: "100%" }}
                    animate={{
                        width: 0,
                        transition: {
                            ease: [0.87, 0, 0.13, 1],
                            duration: 1.5,
                        },
                    }}
                ></motion.div>
                <div className="slider-container" ref={sliderRef}>
                    {width >= 768
                        ? headerData.map(({ image }) => (
                              <div
                                  className="img-container"
                                  key={image.desktop}
                              >
                                  <motion.img
                                      initial={{ scale: 1.2 }}
                                      animate={{
                                          scale: 1,
                                          transition: {
                                              ease: [0.87, 0, 0.13, 1],
                                              duration: 1.5,
                                          },
                                      }}
                                      src={image.desktop}
                                      alt="chair"
                                  />
                              </div>
                          ))
                        : headerData.map(({ image }) => (
                              <div className="img-container" key={image.mobile}>
                                  <motion.img
                                      initial={{ scale: 1.2 }}
                                      animate={{
                                          scale: 1,
                                          transition: {
                                              ease: [0.87, 0, 0.13, 1],
                                              duration: 1.5,
                                          },
                                      }}
                                      src={image.mobile}
                                      alt="chair"
                                  />
                              </div>
                          ))}
                </div>
                <div className="slider-btns-container">
                    <button
                        className="slider-toggle"
                        onClick={() => {
                            inView <= 0 ? setInView(2) : setInView(inView - 1);
                            setDirection("left");
                        }}
                    >
                        <img src={prevIcon} alt="previous" />
                    </button>
                    <button
                        className="slider-toggle"
                        onClick={() => {
                            inView >= 2 ? setInView(0) : setInView(inView + 1);
                            setDirection("right");
                        }}
                    >
                        <img src={nextIcon} alt="next" />
                    </button>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.25 } }}
                layout
                className="content"
            >
                <AnimatePresence initial={false} exitBeforeEnter>
                    {headerData.map(
                        ({ caption, title }, index) =>
                            index === inView && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: direction === "right" ? 75 : -75,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            ease: [0.16, 1, 0.3, 1],
                                            duration: 1,
                                        },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: direction === "right" ? -75 : 75,
                                        transition: {
                                            ease: [0.16, 1, 0.3, 1],
                                            duration: 1,
                                        },
                                    }}
                                    key={caption}
                                >
                                    <h1 className="title">{title}</h1>
                                    <p className="caption">{caption}</p>
                                </motion.div>
                            )
                    )}
                </AnimatePresence>
                <motion.a layout href="/" className="shop-now">
                    <span>Shop now</span>
                    <svg
                        width="40"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                            fillRule="nonzero"
                        />
                    </svg>
                </motion.a>
                <div className="slider-btns-container">
                    <button
                        className="slider-toggle"
                        onClick={() => {
                            setDirection("left");
                            inView <= 0 ? setInView(2) : setInView(inView - 1);
                        }}
                    >
                        <img src={prevIcon} alt="previous" />
                    </button>
                    <button
                        className="slider-toggle"
                        onClick={() => {
                            setDirection("right");
                            inView >= 2 ? setInView(0) : setInView(inView + 1);
                        }}
                    >
                        <img src={nextIcon} alt="next" />
                    </button>
                </div>
            </motion.div>
        </StyledHeader>
    );
};

export default Header;
