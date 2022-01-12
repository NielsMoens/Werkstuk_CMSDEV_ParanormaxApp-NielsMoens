import App from "../App/App";
import LoginPage from "../../pages/Onboarding/LoginPage";
import {useState} from "react";


const AuthContainer = () => {
    const [user, setUser] = useState();
    console.log(user)
    if (user) {
        return (
            <App />
        );
    }
    return (
              <LoginPage setUser={setUser} />
    );
};


export default AuthContainer;
