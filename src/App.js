import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Home, Rooms, About, News, Contact } from "./pages/Home/HomePagesExporter";
import NoPage from "./pages/NoPage";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="rooms" element={<Rooms />} />
                    <Route path="about" element={<About />} />
                    <Route path="blog" element={<News />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="sign-up" element={<SignUp />} />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
