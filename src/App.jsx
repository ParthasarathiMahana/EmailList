import Email from "./components/Email"
import { useEmail } from "./context/emailContext"
import styles from "./styles/App.module.css"

function App() {

  const  {allEmails} = useEmail()

  return (
    <div className={styles.outerContainer}>
      {allEmails?.map((emailItem, index)=>(
        <Email 
        key={index}
        avatarText={emailItem.from.name.charAt(0)} 
        from={emailItem.from.email} 
        name={emailItem.from.name} 
        subject={emailItem.subject} 
        description={emailItem.short_description} 
        date={new Date(emailItem.date).toLocaleString()}
        isFav={true}
        />
      ))}
    </div>
  )
}

export default App
