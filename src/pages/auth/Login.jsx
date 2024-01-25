import { useEffect } from "react";
import BodyTitle from "../../components/Common/BodyTitle";
import "./authStyles.css";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";

function Login() {

    useEffect(() => {
        const getUser = async () => {
            const { data } = await axios.get('https://localhost:7136/api/v1/user/get-user');
            console.log(data)
        }
        getUser();
    },[])

    return (
        <div className="body-wrapper d-flex flex-column justify-content-center align-items-center" style={{ gap: "10px"}}>
            <div className="box">
                <BodyTitle title={"Login"} />
                <div className="body-content d-flex justify-content-center" style={{ position: "relative", top: "-24px"}}>
                    <section className="">
                        <div className="container">
                            <div className="row d-flex justify-content-center" style={{ gap: "140px" }}>
                                <div className="col-lg-10">
                                    <form action="#" className="contact-form">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <input
                                                    type="text"
                                                    placeholder="username"
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <input
                                                    type="password"
                                                    placeholder="password"
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" style={{ width: "100%"}}>
                                                    Login
                                                </button>
                                            </div>
                                            <div className="col-lg-12">
                                                <hr />
                                            </div>
                                            <div className="col-lg-12 d-flex justify-content-center align-items-center" style={{gap: "20px"}}>
                                                <a href="/login" style={{ all: "initial", cursor: "pointer"}} >
                                                    <FaFacebook style={{ width: "30px", height: "30px"}}/>
                                                </a>
                                                <a href="/login" style={{ all: "initial", cursor: "pointer"}}>
                                                    <FaGoogle style={{ width: "30px", height: "30px"}}/>
                                                </a>
                                            </div>
                                            <a href="/login" className="col-lg-12 d-flex align-items-center justify-content-center" style={{paddingTop: "10px"}}>
                                                <span>Forgot password?</span>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="box2">
                <span>Don't have an account? <a href="/sign-up" style={{color: "blue"}}>Sign up</a></span>
            </div>
        </div>
    );
}

export default Login;
