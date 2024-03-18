import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import SignForm from '../Components/SignForm/SignForm'

function SignUp() {
  return (
    <div>
      <NavBar/>
      <div className="flex item-center justify-center mt-6">
        <SignForm/>
      </div>
    </div>
  )
}

export default SignUp
