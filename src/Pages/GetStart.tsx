import GetStartForm from "../Components/GetStartForm/GetStartForm"
import NavBar from "../Components/NavBar/NavBar"


function GetStart() {
  return (
    <div className="h-[830px] flex flex-col">
        <NavBar/>
        <div className="flex item-center justify-center py-6 h-full">
            <GetStartForm/>
        </div>
      
    </div>
  )
}

export default GetStart
