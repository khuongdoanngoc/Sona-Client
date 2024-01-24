import Footer from "./partials/Footer";
import Header from "./partials/Header";
import { Outlet, Link } from "react-router-dom";
import Roof from "./partials/Roof";

function Layout() {
    return (
        <div>
            <Roof/>
            <Header />
            <div className="body">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
