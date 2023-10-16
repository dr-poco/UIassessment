import Header from "./Header";
import Footer from "./Footer";
import ImageComponent from "./ImageComponent";
import { Icon } from "crayon-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function RequestAccess() {

    const [details, setDetails] = useState({
        name: "",
        email: "",
        reason: ""
    });

    const [user, setUser] = useState("")

    const [success, setSuccess] = useState(false)

    const navigate = useNavigate();

    const imageStyle = {
        height: "100vh",
        position: "relative"
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
        console.log(details.name);
        setUser(details.name);
        setSuccess(true);
    }

    const handleAccess = () => {
        navigate("/access")
    }
    const handleForgot = () => {
        navigate("/forgot")
    }

    return (success ?
        <div className="container-fluid p-0 m-0">
            <div className="row p-0 m-0">
                <div className=" col-md-8 d-none d-md-block p-0 m-0">
                    <ImageComponent url="./Images/engage.jpg" htext='Engage Studio' />
                </div>
                <div style={imageStyle} className="col-md-4 col-sm-12 p-0 m-0">
                    <Header />
                    <div>
                        <h6 class="h6" style={{ position: "absolute", top: "36%", left: "7%", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}><span><Icon color="#000" name="add-user" /></span>           Request for access</h6>
                        <p style={{ position: "absolute", top: "42%", left: "10%", paddingLeft: "3%", paddingRight: "35px", fontSize: 15 }}>
                            Thanks {user} for you interest, We have <b> requested admin</b> to verify and approval. Watchout your email for email with magic link for us.</p>

                        <p style={{ position: "absolute", top: "60%", left: "13%", fontSize: "13px" }}> You can also write to us at <b style={{ cursor: 'pointer', color: "black", textDecoration: "underline" }} onClick={() => window.location.href = 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqSvdJXdGPccRLwWKCxlRkSHLHnmBdfkDQwsstrrDClFDDswrPFqwfFrQfpfMLKKKjdmQB'}>admin@maya.ai</b> </p>
                    </div>
                    <div style={{ position: "absolute", top: "70%", left: "7%", }}>
                        <p style={{ margin: "0px", marginBottom: "3px" }}><span style={{ cursor: 'pointer', color: "#516078", textDecoration: "underline" }} onClick={handleForgot}>Lost your password</span></p>

                        <p
                            style={{ margin: "0px", color: "#516078" }}
                        >Not a member yet? <span style={{ cursor: 'pointer', color: "#516078", textDecoration: "underline" }}
                            onClick={handleAccess}
                        >
                                Request Access</span></p>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
        :
        <div className="container-fluid p-0 m-0">

            <div className="row p-0 m-0">
                <div className=" col-md-8 d-none d-md-block p-0 m-0">
                    <ImageComponent url="./Images/engage.jpg" htext='Engage Studio' />
                </div>
                <div style={imageStyle} className="col-md-4 col-sm-12 p-0 m-0">
                    <Header />
                    <div style={{ position: "absolute", top: "35%", left: "7%" }}>
                        <h6 class="h6" style={{ fontSize: "14px", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" }}><span><Icon color="#000" name="add-user" /></span>  Request for access</h6>
                        <form onSubmit={handleSubmit}>
                            <div className="form mb-2 " style={{ position: "relative" }}>
                                <label style={{ position: "absolute", fontSize: "12px", top: "3px", left: "13px" }}> Name: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingname"
                                    name="name"
                                    value={details.name}
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                    style={{ height: '52px', paddingTop: "18px", fontSize: "14px" }}
                                />
                            </div>
                            <div className="form mb-2 " style={{ position: "relative", width: 350 }}>
                                <label style={{ position: "absolute", fontSize: "12px", top: "3px", left: "13px" }}> Email: </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    name="email"
                                    value={details.email}
                                    placeholder="@hdfc.com"
                                    onChange={handleChange}
                                    required
                                    style={{ height: '52px', paddingTop: "18px", fontSize: "14px" }}
                                />
                            </div>
                            <div className="form mb-2 " style={{ position: "relative" }}>
                                <label style={{ position: "absolute", fontSize: "12px", top: "3px", left: "13px" }}> Reason: </label>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    id="exampleTextBox"
                                    name="reason"
                                    value={details.reason}
                                    placeholder="Breif Your Requirements"
                                    onChange={handleChange}
                                    style={{ height: '90px', paddingTop: "18px", fontSize: "14px" }}
                                />
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                                <label className="custom-control-label" htmlFor="flexCheckDefault" required style={{ fontSize: "14px", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)"}}>
                                    Send me an email copy
                                </label>
                                <span>
                                    <button className="btn btn-dark" style={{ marginLeft: '75px', width: '120px', height: "36px", border: 2, fontSize: 12 }} type="submit">
                                        Submit
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )

}

export default RequestAccess;