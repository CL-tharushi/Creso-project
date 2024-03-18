import GetStartForm from "../Components/GetStartForm/GetStartForm"
import NavBar from "../Components/NavBar/NavBar"


function GetStart() {
  return (
    <div>
        <NavBar/>
        <div className="flex item-center justify-center mt-6">
            <GetStartForm/>
        </div>
      
    </div>
  )
}

export default GetStart
