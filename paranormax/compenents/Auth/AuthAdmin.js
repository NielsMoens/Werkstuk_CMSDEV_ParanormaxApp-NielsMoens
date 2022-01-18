import { useEffect } from 'react'
import { useRouter } from "next/router";
import { useAuth } from "../../hooks/useAuth";

//  WIP to check if the user is an admin if so display the right content TODO
export const AuthAdmin = ({children}) => {
    const { push } = useRouter();
    const { isAdmin } = useAuth();


    useEffect(() => {
        if (!isAdmin) {
            return push('/app');
        }
    })

    return(
        <>
            {children}
        </>
    )
};

