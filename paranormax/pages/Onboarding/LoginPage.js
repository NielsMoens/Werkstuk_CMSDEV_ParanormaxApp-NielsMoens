import Link from "next/link";
import {useState} from "react";

const LoginPage = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    });


    return (
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="row w-100 m-0">
                        <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                            <div className="card col-lg-4 mx-auto">
                                <div className="card-body px-5 py-5">
                                    <h3 className="card-title text-left mb-3">Login</h3>
                                    <form>
                                        <div className="form-group">
                                            <label>Username or email *</label>

                                            <input type="text" className="form-control p_input"></input>
                                        </div>
                                        <div className="form-group">
                                            <label>Password *</label>
                                            <input type="text" className="form-control p_input"></input>
                                        </div>
                                        <div className="form-group d-flex align-items-center justify-content-between">
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input"></input> Remember me </label>
                                            </div>
                                            <Link href='/Onboarding/ForgotPassword'><a href="#" className="forgot-pass">Forgot password</a></Link>
                                        </div>
                                        <div className="text-center">
                                            <button type="submit" className="btn btn-primary btn-block enter-btn">Login</button>
                                        </div>
                                        <p className="sign-up">Don't have an Account?<a href="#"> Sign Up</a></p>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default LoginPage;
