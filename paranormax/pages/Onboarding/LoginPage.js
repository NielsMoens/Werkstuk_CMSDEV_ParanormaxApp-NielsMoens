import * as yup from "yup";
import Link from "next/link";
import {useState} from "react";
import Input from "../../compenents/Design/Input";
import Btn from "../../compenents/Design/Btn";
import {useMutation} from "@apollo/client";
import GET_LOGINDATA from "../../lib/Queries/getLoginData";

let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
});


const LoginPage = (setUser) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [checkLogin, {something, loading, error}] = useMutation(GET_LOGINDATA)

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        schema.validate(data)
            .then(() =>{
                checkLogin({
                    variables: data,
                    onCompleted: ({authenticate})=>{
                        console.log('loged in ');
                    },
                }).then((data)=>{
                    setUser = data.data.authenticate;
                    console.log(setUser);
                })
                console.log(data);
            })
            .catch((err) => {
            console.log(err.errors);
        });

    };

    return (
        <>
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="row w-100 m-0">
                        <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg">
                            <div className="card col-lg-4 mx-auto">
                                <div className="card-body px-5 py-5">
                                    <h3 className="card-title text-left mb-3">Login</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>Username or email *</label>
                                            <Input
                                                placeholder="email"
                                                id="email"
                                                className="form-control p_input"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                onChange={handleChange}
                                                // error={errors.email}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Password *</label>
                                            <Input
                                                id="password"
                                                className="form-control p_input"
                                                placeholder="Password"
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                onChange={handleChange}
                                                // error={errors.password}
                                            />
                                        </div>
                                        <div className="form-group d-flex align-items-center justify-content-between">
                                            <Link href='/Onboarding/ForgotPassword'><a href="#" className="forgot-pass">Forgot password</a></Link>
                                        </div>
                                        <div className="text-center">
                                            <Btn className="btn btn-primary btn-block enter-btn" color="primary" type="submit"> Login </Btn>
                                        </div>
                                        <p className="sign-up">
                                            Don't have an Account?
                                            <Link href='/Onboarding/Register'>
                                                <a href="#">
                                                    Sign Up
                                                </a>
                                            </Link>
                                        </p>
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
