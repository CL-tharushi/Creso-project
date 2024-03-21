
import NavBar from '../Components/NavBar/NavBar'
import SecureWalletForm from '../Components/SecureWalletForm/SecureWalletForm'

function SecureWallet() {
  return (
    <div className=" h-[830px] flex flex-col">
    <NavBar />
    <div className="flex item-center justify-center py-6 h-full">
      <SecureWalletForm />
    </div>
  </div>
  )
}

export default SecureWallet
