import { useEffect } from 'react'
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";

// check if the user is Authenticated else => back to login page
export const AuthGuard = ({children}) => {
    const { push } = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            return push('/login');
        }
    })

    return(
        <>
            {children}
        </>
    )
};

