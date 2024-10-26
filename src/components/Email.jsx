import React from 'react'
import styles from '../styles/Email.module.css'
import { useEmail } from '../context/emailContext'

const Email = ({id, avatarText, from, name, subject, description, date, isFav}) => {

  const {setSplitScreen, getBodyOfEmail} = useEmail()

  const handleClickOnEmail = () => {
    setSplitScreen(true)
    getBodyOfEmail(id)
  }

  return (
    <div className={styles.outerBox} onClick={handleClickOnEmail}>
      <div className={styles.avatarSection}>
        <div className={styles.avatar}>{avatarText}</div>
      </div>
      <div className={styles.detailsSection}>
        <p className={styles.detailItem}>From: <span className={styles.detailItemValues}>{name}&nbsp;{`<${from}>`}</span></p>
        <p className={styles.detailItem} style={{width:"250px"}}> Subject: <span className={styles.detailItemValues}>{subject}</span></p>
        <p className={styles.detailItem}>{description}</p>
        <p className={styles.detailItem}>{date} {isFav&&<span className={styles.detailItemValues} style={{color:"#e54065"}}>Favorite</span>}</p>
      </div>
    </div>
  )
}

export default Email
