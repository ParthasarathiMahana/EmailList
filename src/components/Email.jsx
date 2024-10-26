import React from 'react'
import styles from '../styles/Email.module.css'
import { useEmail } from '../context/emailContext'

const Email = ({id, avatarText, from, name, subject, description, date}) => {

  const tempDate = new Date(date);
  const formattedDate = tempDate.toLocaleDateString("en-GB"); 
  const formattedTime = tempDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, 
  });
  const formattedDateTime = `${formattedDate} ${formattedTime}`; 

  const Avatar = ({bgColor}) => {
    return (
    <div className={styles.avatarSection} style={{backgroundColor:bgColor}}>
      <div className={styles.avatar}>{avatarText}</div>
    </div>
  )
  }

  const {setSplitScreen, getBodyOfEmail, setEmailDetailsHeader} = useEmail()

  const handleClickOnEmail = () => {
    setSplitScreen(true)
    getBodyOfEmail(id)
    setEmailDetailsHeader({avatar: Avatar, subject:subject, date: formattedDateTime})
    localStorage.setItem(id, JSON.stringify({read:true, fav: false}))
  }

  const statusOfEmail = JSON.parse(localStorage.getItem(id))
  console.log(statusOfEmail);
  

  return (
    <div className={styles.outerBox} onClick={handleClickOnEmail} style={statusOfEmail.read ? {backgroundColor:"#f2f2f2"}:{}}>
      <Avatar bgColor={statusOfEmail.read ? "#f2f2f2" : "white"}/>
      <div className={styles.detailsSection} style={statusOfEmail.read ? {backgroundColor:"#f2f2f2"}:{}}>
        <p className={styles.detailItem} style={statusOfEmail.read ? {backgroundColor:"#f2f2f2"}:{}}>From: <span style={statusOfEmail.read ? {backgroundColor:"#f2f2f2"}:{}} className={styles.detailItemValues}>{name}&nbsp;{`<${from}>`}</span></p>
        <p className={styles.detailItem} style={statusOfEmail.read ? {backgroundColor:"#f2f2f2", width:"250px"}:{width:"250px"}}> Subject: <span className={styles.detailItemValues} style={statusOfEmail.read ? {backgroundColor:"#f2f2f2"}:{}}>{subject}</span></p>
        <p className={styles.detailItem} style={statusOfEmail.read ? {backgroundColor:"#f2f2f2"}:{}}>{description}</p>
        <p className={styles.detailItem} style={statusOfEmail.read ? {backgroundColor:"#f2f2f2"}:{}}>{formattedDateTime} {statusOfEmail.fav&&<span className={styles.detailItemValues} style={statusOfEmail.read ? {backgroundColor:"#f2f2f2", color:"#e54065"}:{color:"#e54065"}}>Favorite</span>}</p>
      </div>
    </div>
  )
}

export default Email
