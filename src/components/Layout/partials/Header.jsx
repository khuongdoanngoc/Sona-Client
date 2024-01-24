import Logo from "../../../assets/imgs/logo.png";
function Header() {
    return (
        <div className="menu-item">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo">
                            <a href="/">
                                <img src={Logo} alt="Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="nav-menu">
                            <nav className="mainmenu">
                                <ul>
                                    <li className="active">
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/rooms">Rooms</a>
                                    </li>
                                    <li>
                                        <a href="/blog">News</a>
                                    </li>
                                    <li>
                                        <a href="/about">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                    <li>
                                        <a href="/">Account</a>
                                        <ul className="dropdown">
                                            <li>
                                                <a href="/">
                                                    Login
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    Sign Up
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div className="nav-right search-switch">
                                <i className="icon_search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
