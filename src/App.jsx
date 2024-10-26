import Email from "./components/Email"

function App() {

  return (
    <div>
     <Email 
     avatarText={"P"} 
     from={"psm@gmail.com"} 
     name={"Partha"} 
     subject={"communicate"} 
     description={"it has been log since we talk."} 
     date={"27/04/2027 10:30am"}
     isFav={false}
     />
    </div>
  )
}

export default App
