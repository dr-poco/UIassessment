
import ImageComponent from "./ImageComponent";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";


function Reset() {

    const data = useLocation();
    const user = data.state.user;

    const [details, setDetails] = useState({
        newpassword: "",
        confirmpassword: "",
    });


    const [success, setSuccess] = useState(false)

    const imageStyle = {
        height: "100vh",
        position: "relative"
    }
    const navigate = useNavigate();

    const handleAccess = () => {
        navigate("/access")
    }

    const handleLogin = () => {
        navigate("/")
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({
            ...details,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(true);
    }

    return (
        success ?
            <div className="container-fluid p-0 m-0">
                <div className="row p-0 m-0">
                    <div className=" col-md-8 d-none d-md-block p-0 m-0">
                        <ImageComponent url="./Images/engage.jpg" htext='Engage Studio' />
                    </div>
                    <div style={imageStyle} className="col-md-4 col-sm-12 p-0 m-0">
                        <Header />
                        <div>
                            <p className="password-reset">
                                Your Password Has been Reset </p>
                        </div>
                        <p className="login-go-back"> Go back to <span onClick={handleLogin}
                        >Login</span>
                        </p>
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
                        <div style={{position:"absolute",top:"33%",left:"10%"}}>
                            <h6 class="h6" style={{ fontSize: "14px" }}>

                                <b>Welcome {user.split('@')[0].charAt(0).toUpperCase() + user.split('@')[0].slice(1)}, </b>

                                Set your Credential</h6>
                        </div>


                        <div style={{ position: "absolute", top: "38%", left: "10%" }}>
                            <form onSubmit={handleSubmit}>
                                <div className="form mb-3 " style={{ position: "relative", width: "340px" }}>
                                    <label style={{ position: "absolute", fontSize: "12px", top: "3px", left: "13px" }}> Password </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingInput"
                                        name="newpassword"
                                        value={details.newpassword}
                                        placeholder="Credentials"
                                        onChange={handleChange}
                                        required
                                        style={{ height: '52px', paddingTop: "18px", fontSize: "14px" }}
                                    />

                                </div>

                                <div className="form mb-3 " style={{ position: "relative", width: "340px" }}>
                                    <label style={{ position: "absolute", fontSize: "12px", top: "3px", left: "13px" }}> Re-enter Password </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingInput"
                                        name="confirmpassword"
                                        value={details.confimpassword}
                                        placeholder="Re-type Credentials"
                                        onChange={handleChange}
                                        style={{ height: '52px', paddingTop: "18px", fontSize: "14px" }}
                                    />
                                </div>
                                {details.newpassword !== details.confirmpassword && details.confirmpassword !== '' && (

                                    <div style={{ color: 'red' }}>Passwords do not match.</div>

                                )}

                                {details.newpassword === details.confirmpassword && details.newpassword !== '' && (

                                    <div style={{ color: 'green' }}>Passwords match.</div>

                                )}
                                <div className="custom-control custom-checkbox">
                                    <button className="btn btn-dark" disabled={!details.newpassword || !details.confirmpassword || details.newpassword !== details.confirmpassword} style={{ marginLeft: '250px', width: '90px', height: "36px", padding: "0px" }} type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                       
                        <Footer />
                    </div>
                </div>
            </div>
    )




}

export default Reset;