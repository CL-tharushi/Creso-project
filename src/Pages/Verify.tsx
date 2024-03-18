import NavBar from "../Components/NavBar/NavBar"
import VerifyForm from "../Components/VerifyForm/VerifyForm"


const Verify = () => {
  return (
    <div>
      <NavBar/>
      <div className="flex item-center justify-center mt-6">
        <VerifyForm/>
      </div>
    </div>
  )
}

export default Verify