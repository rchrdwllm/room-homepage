import { useState, useEffect } from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import GlobalStyles from "./styles/globalStyles";
import Nav from "./components/Nav";
import Layout from "./components/Layout";
import Header from "./components/Header";
import About from "./components/About";
import Loader from "./components/Loader";
import Footer from "./components/Footer";

const App = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000);
    }, []);

    return (
        <AnimateSharedLayout type="crossfade">
            <GlobalStyles />
            <AnimatePresence exitBeforeEnter>
                {isLoading ? (
                    <Loader key="loader" />
                ) : (
                    <div key="main">
                        <Nav />
                        <Layout>
                            <Header />
                            <About />
                        </Layout>
                        <Footer />
                    </div>
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    );
};

export default App;
