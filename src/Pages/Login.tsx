import NavBar from "../Components/NavBar/NavBar";
import LoginForm from "../Components/LoginForm/LoginForm";

function Login() {
  return (
    <div className="min-h-screen flex flex-col justify-between h-full">
      <NavBar />
      <div className="flex item-center justify-center mt-6 h-full">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;