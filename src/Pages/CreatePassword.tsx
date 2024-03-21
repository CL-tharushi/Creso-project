
import NavBar from '../Components/NavBar/NavBar'
import CreatePasswordForm from '../Components/CreatePasswordForm/CreatePasswordForm'

function CreatePassword() {
  return (
    <div className=" h-[830px] flex flex-col">
    <NavBar />
    <div className="flex item-center justify-center py-6 h-full">
      <CreatePasswordForm />
    </div>
  </div>
  )
}

export default CreatePassword

