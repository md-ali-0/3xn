import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext();

export const AuthProdiver = ({ children }) => {
    const axios = useAxiosPublic();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    
    const login = async (email, password) => {
        const response = await axios.post("/login", { email, password });
        localStorage.setItem('token',response.data.token)
        setUser(response.data.user);
        setIsLoading(false)
        return response;
    };
    const signUp = async (name, email, password) => {
        const response = await axios.post("/signup", {
            name,
            email,
            password,
        });
        setIsLoading(false)
        setUser(response.data.user);
        return response;
    };
    const logout = async()=>{
        setUser(null);
        localStorage.removeItem('token')
        setIsLoading(false)
    };

    useEffect(()=>{

      const unSubscribe = async ()=>{
        setIsLoading(true)
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const response = await axios.post('/token-verify', {token})
                setUser(response.data)
            } catch (error) {
                console.error('Token verification failed:', error);
                setUser(null)
                localStorage.removeItem('token')
            } finally{
                setIsLoading(false)
            }
        } else{
            setUser(null)
            setIsLoading(false)
        }
      }
      
      unSubscribe()
    },[])
    
    const userInfo = {
        login,
        signUp,
        logout,
        user,
        isLoading,
        
    };

    return (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    );
};