
import NavBar from '../Components/NavBar/NavBar'
import LoginForm from '../Components/LoginForm/LoginForm'

function Login() {
  return (
    <div>
        <NavBar/>
        <div className="flex item-center justify-center mt-6">
            <LoginForm/>
        </div>
      
    </div>
  )
}

export default Login