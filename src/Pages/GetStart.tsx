import GetStartForm from "../Components/GetStartForm/GetStartForm"
import NavBar from "../Components/NavBar/NavBar"


function GetStart() {
  return (
    <div className="flex items-center flex-col h-screen justify-between">
        <NavBar/>
        <div className="flex item-center justify-center mt-6 h-full">
            <GetStartForm/>
        </div>
      
    </div>
  )
}

export default GetStart
