import Email from "./components/Email"
import FullEmailContent from "./components/FullEmailContent"
import { useEmail } from "./context/emailContext"
import styles from "./styles/App.module.css"

function App() {

  const  {allEmails, splitScreen, emailBody} = useEmail()

  return (
    <div 
    className={splitScreen ? styles.outerContainer : ""}
    >
      <div 
      className={splitScreen ? styles.emailContainer : ""}
      >
      {allEmails?.map((emailItem, index)=>(
        <Email 
        key={index}
        id={emailItem.id}
        avatarText={emailItem.from.name.charAt(0)} 
        from={emailItem.from.email} 
        name={emailItem.from.name} 
        subject={emailItem.subject} 
        description={emailItem.short_description} 
        date={emailItem.date}
        />
      ))}
    </div>
    {splitScreen?
    <FullEmailContent emailBody={emailBody}/>
      :
      ""
    }
    </div>
  )
}

export default App
