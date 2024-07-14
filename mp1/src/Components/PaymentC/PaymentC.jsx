import React from 'react'
import {Link} from 'react-router-dom'
import "./PaymentC.css"


const PaymentC = () => {
  return (
    <div className="jcontainer">
        <div className="jmain">
            <h1>Payment Page</h1>
            <div className="name">
                <p>Firstname</p>
                <input type="text" name="Firstname" id="Firstname" />
                <br />
                <p>Lastname</p>
                <input type="text" name="Lastname" id="Lastname" />
            </div>
            <div className="cardholder">
                <div className="cardnumber">
                    <p>Card Number</p>
                    <input type="number" name="Cardnumber" id="Cardnumber" />
                </div>
                <div className="cvv">
                    <p>CVV</p>
                    <input type="number" name="CVV" id="CVV" />
                </div>
                <div className="date">
                    <p>Expiry Date</p>
                    <input type="month" name="" id="" />
                </div>
            </div>
            <div className="paybuttons">
                <button className='homebtn'><Link to={'/'}> Make Payment</Link> </button>
                <button> <Link to={'/shop'}>Cancel Payment</Link></button>
            </div>
            <div className="upi">
                <img className='upiimg' src="/dogs-images/upi.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default PaymentC