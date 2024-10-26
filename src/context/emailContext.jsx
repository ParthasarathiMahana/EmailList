import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const emailContext = createContext();

export const CustomEmailProvider = ({children}) => {
    const [allEmails, setAllEmails] = useState([])

    const getAllEmails = async () => {
        try {
            const response = await axios.get('https://flipkart-email-mock.vercel.app/')
            if(response.status === 200){
                setAllEmails(response.data.list);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getAllEmails()
    },[])

    return(
        <emailContext.Provider
            value={{allEmails}}
        >
            {children}
        </emailContext.Provider>
    )
}

export const useEmail = () => {
    return useContext(emailContext)
}