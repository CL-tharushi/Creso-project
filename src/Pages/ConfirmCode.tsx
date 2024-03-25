
import NavBar from '../Components/NavBar/NavBar'
import ConfirmCodeForm from '../Components/ConfirmCodeForm/ConfirmCodeForm'

function ConfirmCode() {
  return (
    <div className="h-[830px] flex flex-col">
      <NavBar />
      <div className="flex item-center justify-center py-6 h-full">
        <ConfirmCodeForm />
      </div>
    </div>
  )
}

export default ConfirmCode

