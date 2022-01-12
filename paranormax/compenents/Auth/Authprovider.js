// const AuthProvider = () => {
//     const [user, setUser] = useState(storage.getUser());
//
//     const logout = () => {
//         updateAuth(null);
//     };
//
//     if (user) {
//         return (
//             <AuthContext.Provider value={{ user, logout }}>
//                 <App />
//             </AuthContext.Provider>
//         );
//     }
//     return (
//         <Switch>
//                 <LoginPage  />
//             <Redirect to={Routes.Login} />
//         </Switch>
//     );
// };
//
// // by using useContext we can access the user&setUser in all the files all the files above
//
//
// export default AuthProvider;
