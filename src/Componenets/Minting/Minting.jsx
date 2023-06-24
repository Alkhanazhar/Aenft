import React from 'react'
import "./Minting.css"

const Minting = () => {
  return (
    <div className='minting'>
    <div className='container'>
        <h6 className='color-gradient'> {" "}Simple steps</h6>
        <h2 className='m-0 bold'>Minting Technique</h2>
        <div className="height30"></div>

        <div className="row-card">
            <div className="card2">
                <h3>Connect Wallet </h3>
                <div className="emoji">👋</div>
            </div>
            <div className="card2">
                <h3>Select Your Quantity
 </h3>
                <div className="emoji">👉</div>
            </div> <div className="card2">
                <h3>Transection Confirm
</h3>
                <div className="emoji">👍</div>
            </div> <div className="card2">
                <h3>Recive Your NFTs
</h3>
                <div className="emoji">🙂</div>
            </div>
        </div>
        <div className="height70"></div>

    </div>
    </div>
  )
}

export default Minting