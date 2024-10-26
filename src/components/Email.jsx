import React from 'react'
import styles from '../styles/Email.module.css'

const Email = ({avatarText, from, name, subject, description, date, isFav}) => {
  return (
    <div className={styles.outerBox}>
      <div className={styles.avatarSection}>
        <div className={styles.avatar}>{avatarText}</div>
      </div>
      <div className={styles.detailsSection}>
        <p className={styles.detailItem}>From: <span style={{fontWeight:"bold", backgroundColor:"white"}}>{name}&nbsp;{`<${from}>`}</span></p>
        <p className={styles.detailItem}> Subject: <span style={{fontWeight:"bold", backgroundColor:"white"}}>{subject}</span></p>
        <p className={styles.detailItem}>{description}</p>
        <p className={styles.detailItem}>{date} {isFav&&<span style={{color:"#e54065", fontWeight:"bold", backgroundColor:"white"}}>Favorite</span>}</p>
      </div>
    </div>
  )
}

export default Email
