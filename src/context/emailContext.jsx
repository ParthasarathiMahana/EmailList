import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const emailContext = createContext();

export const CustomEmailProvider = ({children}) => {
    const [allEmails, setAllEmails] = useState([])
    const [splitScreen, setSplitScreen] = useState(false)
    const [emailBody, setEmailBody] = useState({})

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

    const getBodyOfEmail = async (id) => {
        try {
            const response = await axios.get(`https://flipkart-email-mock.vercel.app/?id=${id}`)
            console.log(response.data);
            setEmailBody(response.data.body)
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <emailContext.Provider
            value={{allEmails, setSplitScreen, splitScreen, getBodyOfEmail, emailBody}}
        >
            {children}
        </emailContext.Provider>
    )
}

export const useEmail = () => {
    return useContext(emailContext)
}