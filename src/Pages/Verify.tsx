import NavBar from "../Components/NavBar/NavBar"
import VerifyForm from "../Components/VerifyForm/VerifyForm"


const Verify = () => {
  return (
    <div className='h-[830px] flex flex-col'>
      <NavBar/>
      <div className="flex item-center justify-center py-6 h-full">
        <VerifyForm/>
      </div>
    </div>
  )
}

export default Verify