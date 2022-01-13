import App from "../App/App";
import LoginPage from "../../pages/Onboarding/LoginPage";
import {useState} from "react";


const AuthContainer = () => {

    let [user, setUser] = useState();
    setUser = localStorage.getItem("userdata");

    console.log('auth '+ user)
    // if (user) {
        return (
            <App />
        );
    // // } else{
    //     return (
    //         <LoginPage setUser={setUser} />
    //     );
};


export default AuthContainer;
