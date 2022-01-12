import App from "../App/App";
import LoginPage from "../../pages/Onboarding/LoginPage";
import {useState} from "react";




const AuthContainer = () => {
    const [user, setUser] = useState();

    if (user) {
        return (
            <App />
        );

    }
    return (
              <LoginPage  />
    );
};


export default AuthContainer;
