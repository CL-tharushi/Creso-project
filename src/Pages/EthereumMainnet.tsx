import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import EthereumMainnetForm from '../Components/EthereumMainnet/EthereumMainnetForm'

function EthereumMainnet() {
  return (
    <div className="h-[830px] flex flex-col">
      <NavBar />
      <div className="flex item-center justify-center py-6 h-full">
        <EthereumMainnetForm />
      </div>
    </div>
  )
}

export default EthereumMainnet
