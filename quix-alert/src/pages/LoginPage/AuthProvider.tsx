// AuthProvider.js
import React, { createContext, useContext, useState, ReactNode } from 'react';
import {AuthTokens} from "../../api/model/AuthTokens";

interface AuthContextProps {
    userLogged: boolean;
    login: () => void;
    logout: () => void;
    setTokens: (tokens: AuthTokens) => void;
    getTokens: () => AuthTokens
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [userLogged, setUserLogged] = useState(localStorage.getItem('userLogged') === 'false');
    const [userTokens, setUserTokens] = useState(() => {
        const storedTokens = localStorage.getItem('userTokens');
        return storedTokens ? (JSON.parse(storedTokens) as AuthTokens) : { token: '', refreshToken: '' };
    });

    const login = () => setUserLogged(true);
    const logout = () => setUserLogged(false);

    const getTokens = () => userTokens
    const setTokens = (tokens: AuthTokens) => setUserTokens({token: tokens.token, refreshToken: tokens.refreshToken})

    return (
        <AuthContext.Provider value={{ userLogged, login, logout, setTokens, getTokens }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
