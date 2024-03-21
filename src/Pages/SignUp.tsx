
import NavBar from '../Components/NavBar/NavBar'
import SignForm from '../Components/SignForm/SignForm'

function SignUp() {
  return (
    <div className='h-[830px] flex flex-col'>
      <NavBar/>
      <div className="flex item-center justify-center py-6 h-full">
        <SignForm/>
      </div>
    </div>
  )
}

export default SignUp
