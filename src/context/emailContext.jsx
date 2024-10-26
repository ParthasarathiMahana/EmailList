import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const emailContext = createContext();

export const CustomEmailProvider = ({children}) => {
    const [allEmails, setAllEmails] = useState([])
    const [splitScreen, setSplitScreen] = useState(false)
    const [emailBody, setEmailBody] = useState({})
    const [emailDetailsHeader, setEmailDetailsHeader] = useState({})
    const [currentlyOpenedEmail, setCurrentlyOpenedEmail] = useState('')

    const getAllEmails = async () => {
        try {
            const response = await axios.get('https://flipkart-email-mock.vercel.app/')
            if(response.status === 200){
                setAllEmails(response.data.list);

                response.data.list.map((emailItem)=>{
                    if(!localStorage.getItem(emailItem.id)){
                        localStorage.setItem(emailItem.id, JSON.stringify({read:false, fav: false}))
                    }
                })
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getAllEmails()
    },[])

    const getBodyOfEmail = async (id) => {
        setCurrentlyOpenedEmail(id)
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
            value={{allEmails, setSplitScreen, splitScreen, getBodyOfEmail, emailBody, emailDetailsHeader, setEmailDetailsHeader, currentlyOpenedEmail}}
        >
            {children}
        </emailContext.Provider>
    )
}

export const useEmail = () => {
    return useContext(emailContext)
}