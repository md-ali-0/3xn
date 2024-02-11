import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
    return (
        <>
            <Header />
            <main className="pt-24 md:pt-0">
                <Outlet />
            </main>
            <Footer/>
        </>
    );
};

export default Main;
