import React from 'react'
import styles from "../styles/fullEmail.module.css"
import DOMPurify from 'dompurify';

function FullEmailContent({emailBody}) {

    const sanitizedBody = DOMPurify.sanitize(emailBody)
    console.log(typeof emailBody);

  return (
    <div className={styles.outerContainer}>
        <div dangerouslySetInnerHTML={{ __html: sanitizedBody }}>

        </div>
    </div>
  )
}

export default FullEmailContent
