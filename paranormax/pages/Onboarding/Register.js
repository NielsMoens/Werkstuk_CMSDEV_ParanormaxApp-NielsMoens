import Footer from "../../compenents/App/Footer/Footer";

const Register = () => {
    return (
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="row w-100 m-0">
                        <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                            <div className="card col-lg-4 mx-auto">
                                <div className="card-body px-5 py-5">
                                    <h3 className="card-title text-left mb-3">Register</h3>
                                    <form>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input type="text" className="form-control p_input"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control p_input"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control p_input"/>
                                        </div>

                                        <div className="text-center">
                                            <button type="submit"
                                                    className="btn btn-primary btn-block enter-btn">Register
                                            </button>
                                        </div>

                                        <p className="sign-up text-center">
                                                Already have an Account?
                                                <a href="">
                                                     Sign Up
                                                </a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
