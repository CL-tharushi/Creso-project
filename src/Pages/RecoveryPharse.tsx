
import NavBar from '../Components/NavBar/NavBar'
import RecoveryPharseForm from '../Components/RecoveryPharseForm/RecoveryPharseForm'

function RecoveryPharse() {
  return (
    <div className="h-[830px] flex flex-col">
      <NavBar />
      <div className="flex item-center justify-center py-6 h-full">
        <RecoveryPharseForm />
      </div>
    </div>
  )
}

export default RecoveryPharse
