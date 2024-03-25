
import DiscoverForm from '../Components/DiscoverForm/DiscoverForm'
import NavBar from '../Components/NavBar/NavBar'

function Discover() {
  return (
    <div className="flex flex-col justify-between h-full">
      <NavBar/>
      <div className="flex item-center justify-center py-6 h-full">
        <DiscoverForm />
      </div>
    </div>
  )
}

export default Discover
