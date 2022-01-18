//  Storage file that contains all my localstorage functions
//  typeof window !== "undefined" is needed in next js because of the server-side Rendering
//  so the localStorage functions dont trigger in the first lifecycle but triggers when do window is rendered >.<

const KEY_USER = "KEY_USER";

//  Fetch the userdata from the localStorage
const saveUser = () => {
    if (typeof window !== "undefined") {
        const user = localStorage.getItem(KEY_USER);
        return JSON.parse(user);
    }
    return null
}

//  Remove the userdata from the localStorage
const removeUser = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem(KEY_USER)
    }
}

//  Gets the userdata from the localStorage
const getUser= () => {
    const user = saveUser();
     return user;
}

//  Gets The user id from localStorage
const getUserId = () => {
    const {user} = saveUser();
    let userId=user.id;
    return userId;
}

//  Store the userdata in the localStorage
const storeUser = (user) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(KEY_USER, JSON.stringify(user));
    }
};


export  {  storeUser, getUser, removeUser, getUserId };
