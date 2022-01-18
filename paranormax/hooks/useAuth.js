import {useContext} from "react";
import {AuthContext} from "../compenents/Auth/AuthProvider";

// get the current auth state for user login, register, logout
export const useAuth = () => useContext(AuthContext);