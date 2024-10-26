import React from 'react'
import styles from '../styles/Email.module.css'
import { useEmail } from '../context/emailContext'

const Email = ({id, avatarText, from, name, subject, description, date, isFav}) => {

  const tempDate = new Date(date);
  const formattedDate = tempDate.toLocaleDateString("en-GB"); 
  const formattedTime = tempDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, 
  });
  const formattedDateTime = `${formattedDate} ${formattedTime}`; 

  const Avatar = () => {
    return (
    <div className={styles.avatarSection}>
      <div className={styles.avatar}>{avatarText}</div>
    </div>
  )
  }

  const {setSplitScreen, getBodyOfEmail, setEmailDetailsHeader} = useEmail()

  const handleClickOnEmail = () => {
    setSplitScreen(true)
    getBodyOfEmail(id)
    setEmailDetailsHeader({avatar: Avatar, subject:subject, date: formattedDateTime})
  }

  return (
    <div className={styles.outerBox} onClick={handleClickOnEmail}>
      <Avatar/>
      <div className={styles.detailsSection}>
        <p className={styles.detailItem}>From: <span className={styles.detailItemValues}>{name}&nbsp;{`<${from}>`}</span></p>
        <p className={styles.detailItem} style={{width:"250px"}}> Subject: <span className={styles.detailItemValues}>{subject}</span></p>
        <p className={styles.detailItem}>{description}</p>
        <p className={styles.detailItem}>{formattedDateTime} {isFav&&<span className={styles.detailItemValues} style={{color:"#e54065"}}>Favorite</span>}</p>
      </div>
    </div>
  )
}

export default Email
