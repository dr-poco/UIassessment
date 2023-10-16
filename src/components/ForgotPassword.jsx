import ImageComponent from "./ImageComponent";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const [email, setEmail] = useState({
        email: "",
    });

    const [user, setUser] = useState("")

    const [success, setSuccess] = useState(false)

    const imageStyle = {
        height: "100vh",
        position: "relative"
    }
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/")
    }

    const handleReset = () => {
        navigate("/reset", {state:{user}})
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmail({
            ...email,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email.email);
        setUser(email.email);
        setSuccess(true);
    }

    return (success ?
        <div className="container-fluid p-0 m-0">
            <div className="row p-0 m-0">
                <div className=" col-md-8 d-none d-md-block p-0 m-0">
                    <ImageComponent url="./Images/forgot.jpg" htext="Commerce Studio" />
                </div>
                <div style={imageStyle} className="col-md-4 col-sm-12 p-0 m-0">
                    <Header />
                    <div>
                        <h6 class="h6" style={{ position: "absolute", top: "36%", left: "7%", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}><img src='./Images/forgotIcon.svg'/><span  style={{paddingLeft:"7px"}}>Forgot Password</span></h6>
                        <p style={{ position: "absolute", top: "42%", left: "10%", paddingLeft: "9px", paddingRight: "35px" }}>
                            Email has been sent to your Inbox <b>({user})</b> with magic link to reset your credentials. </p>

                        <p style={{ position: "absolute", top: "55%", left: "12%", fontSize: "15px" }}> Reset Magic Link <span
                            style={{ cursor: 'pointer',  color:"#516078", textDecoration:"underline" }}
                            onClick={handleReset}
                        >Reset</span>  </p>

                    </div>
                    <div style={{ position: "absolute", top: "65%", left: "12%", padding: "0px" }}>
                        <p style={{ color: "#516078", margin: "0px", fontSize: "13px" }}> Go back to <span
                            style={{ cursor: 'pointer', color: "#516078", textDecoration: "underline" }}
                            onClick={handleLogin}
                        >Login</span> </p>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
        :
        <div className="container-fluid p-0 m-0">
            <div className="row p-0 m-0">
                <div className=" col-md-8 d-none d-md-block p-0 m-0">
                    <ImageComponent url="./Images/forgot.jpg" htext='Commerce Studio' />
                </div>
                <div style={imageStyle} className="col-md-4 col-sm-12 p-0 m-0">
                    <Header />
                    <div style={{ position: "absolute", top: "38%", left: "10%" }}>
                        <h6 class="h6" style={{ fontSize: "14px", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", paddingBottom: 5, paddingLeft: 2 }}> <span> <i className="bi bi-lock"></i> <img src='./Images/forgotIcon.svg'/></span> <span>Forgot Password</span></h6>
                        <form onSubmit={handleSubmit}>
                            <div className="form mb-3 " style={{ position: "relative", width: 350 }}>
                                <label style={{ position: "absolute", fontSize: "12px", top: "5px", left: "13px" }}> Login: </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    name="email"
                                    value={email.email}
                                    placeholder="Email Id"
                                    onChange={handleChange}
                                    required
                                    style={{ width: "330px", height: '52px', paddingTop: "18px", fontSize: "14px" }}
                                />
                            </div>
                            <p style={{ marginLeft: "5px", color: "#516078" }}> Go back to <span
                                style={{ cursor: 'pointer', color: "#516078", textDecoration: "underline" }}
                                onClick={handleLogin}
                            >Login</span>
                                <span >
                                    <span style={{ paddingLeft: 10 }}>
                                        <button className="btn btn-dark"
                                            style={{ marginLeft: '75px', width: '120px', height: "36px", border: 2, fontSize: "12px" }}
                                            type="submit">
                                            Reset
                                        </button>
                                    </span>
                                </span>
                            </p>
                        </form>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;