import React from 'react'
import styles from "../styles/fullEmail.module.css"
import DOMPurify from 'dompurify';
import { useEmail } from '../context/emailContext';

function FullEmailContent({emailBody}) {

    const {setSplitScreen, emailDetailsHeader, currentlyOpenedEmail} = useEmail()
    const sanitizedBody = DOMPurify.sanitize(emailBody)

    const handleClickfav = () => {
        const status = JSON.parse(localStorage.getItem(currentlyOpenedEmail))
        localStorage.setItem(currentlyOpenedEmail, JSON.stringify({...status, fav:true}))
        alert("Email added to your favorite list.")
    }

  return (
    <div className={styles.outerContainer}>
        <div className={styles.header}>
            <div className={styles.leftPartHeader}>
                <emailDetailsHeader.avatar/>
                <div style={{backgroundColor:"white"}}>
                    <div style={{backgroundColor:"white", fontWeight:"bold"}}>{emailDetailsHeader.subject}</div>
                    <div style={{backgroundColor:"white"}}>{emailDetailsHeader.date}</div>
                </div>
            </div>
            <div className={styles.rightHeader}>
                <button 
                onClick={handleClickfav}
                style={{backgroundColor: "#e54065", color:"white", fontWeight:"bold", width:"60%", paddingLeft:"5px", paddingRight:"5px"}}>mark as favorite</button>
                <button style={{backgroundColor:"white", width:"35%", border: "1px solid #e54065"}}
                onClick={()=>setSplitScreen(false)}
                >Close</button>
            </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: sanitizedBody }}>
        </div>
    </div>
  )
}

export default FullEmailContent
