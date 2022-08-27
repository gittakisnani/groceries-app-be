import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        username: '',
        roles: ['User'],
        bag: [],
        liked: []
    });

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const GetAuth = () => useContext(AuthContext)



