const KEY_USER = "KEY_USER";
const getUser = () => {
    if (typeof window !== "undefined") {
        const user = localStorage.getItem("KEY_USER");
        return JSON.parse(user) ;
    }
    return null
};

const removeUser = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("KEY_USER")
    }
}

const storeUser = (user) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("KEY_USER", JSON.stringify(user));
    }
};


export  {  storeUser, getUser, removeUser };
