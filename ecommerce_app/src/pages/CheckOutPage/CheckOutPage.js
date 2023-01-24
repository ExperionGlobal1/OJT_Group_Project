import "./CheckOutPage.css";
import { formatPrice } from '../../utils/helpers';
import { getAllCarts } from '../../store/cartSlice';
import { useSelector } from 'react-redux';
import { useState } from "react";


export default function CheckOutPage() {
    const [cardDetails, setCardDetails] = useState(false);
    const [upi, setUpiDetails] = useState(false);
    const [net, setNetDetails] = useState(false);
    const [message, setMessage] = useState();
    const [error, setError] = useState(false);
    const clickHandleSubmit = () => {
        alert("Completed Successfully..!!")
    }
    const carts = useSelector(getAllCarts);
    const { itemsCount, totalAmount } = useSelector((state) => state.cart);

    const handleCard = () => {
        if (cardDetails == false) {
            setCardDetails(true);
            setUpiDetails(false);
            setNetDetails(false);
        }
        else {
            setCardDetails(false);
        }

    }
    const handleUpi = () => {
        if (upi == false) {
            setUpiDetails(true);
            setCardDetails(false);
            setNetDetails(false);
        }
        else {
            setUpiDetails(false);
        }

    }
    const handleNet = () => {
        if (net == false) {
            setNetDetails(true);
            setCardDetails(false);
            setUpiDetails(false);
        }
        else {
            setNetDetails(false);
        }

    }
   
    return (
        <div className="checkoutt">
            <form>
                <div className="data-side">
                    <div className="details">
                        <div className="form-groups">
                            <label htmlFor="firstname" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">First Name</h6></label>
                            <input id="firstname" className="mb-4" type="text" name="firstname" placeholder="Enter First name" required></input>
                        </div>
                        <div className="form-groups">
                            <label htmlFor="lastname" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Last Name</h6></label>
                            <input id="lastname" className="mb-4" type="text" name="lastname" placeholder="Enter Second name" required></input>
                        </div>
                        <div className="form-groups">
                            <label htmlFor="phn" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Mobile Number</h6></label>
                            <input id="phn" className="mb-4" type="number" name="phn" required></input>
                        </div>
                        <div className="address">
                            <label htmlFor="address" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Address</h6></label>
                            <input id="fulladdress" className="fulladdress" type="text" name="fulladdress" placeholder="enter your full address..." required></input>
                        </div>
                        <div className="side-data">
                            <div className="pincode">
                                <label htmlFor="pin" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">PIN CODE</h6></label>
                                <input id="pin" className="mb-4" type="number" name="pin" required></input>
                            </div>
                            <div className="state">
                                <label htmlFor="state" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">State</h6></label>
                                <select id="state" className="mb-4" type="text" name="state" required>
                                    <option>select </option>
                                    <option>Kerala </option>
                                    <option>Tamil Nadu</option>
                                    <option>Karnataka</option>
                                    <option>Goa</option>

                                </select>
                            </div>
                        </div>
                        <button className="btn btn-default bttn-proceed">proceed to pay</button>
                    </div>

                    <div className='cart-cbody bg-white checkout-body'>
                        <div className='total-txt flex align-center justify-end'>
                            <div className='font-manrope fw-5'>Total ({itemsCount}) items: </div>
                            <span className='text-orange fs-22 mx-2 fw-6'>{formatPrice(totalAmount)}</span>
                        </div>

                        <div className="payment">
                            <label htmlFor="pin">Net Banking</label>

                            <input type="radio" value="option1" name="check" onChange={handleNet} ></input>

                            <label htmlFor="upi">UPI</label>
                            <input type="radio" value="option2" name="check" onChange={handleUpi} ></input>

                            <label htmlFor="card">Card</label>
                            <input type="radio" value="option3" name="check" onChange={handleCard}></input>

                        </div>
                        {cardDetails &&
                            <div>
                                <div className="form-groups">
                                    <label htmlFor="cardnum" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Card Number</h6></label>
                                    <input id="cardnum" className="mb-4" type="number" name="cardnum" placeholder="0000 0000 0000 0000"></input>
                                </div>
                                <div className="pincode">
                                    <label htmlFor="cvv" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">CVV</h6></label>
                                    <input id="cvv" className="mb-4" type="text" name="cvv" maxLength="3" placeholder="123" ></input>
                                </div>
                                <div className="form-groups">
                                    <label htmlFor="holder" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Holder Name</h6></label>
                                    <input id="holder" className="mb-4" type="text" name="holder" placeholder="Enter card holder name" ></input>
                                </div>
                                <div className="pincode">
                                    <label htmlFor="expirydate" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Expiry Date</h6></label>
                                    <input id="expirydate" className="mb-4" type="date" name="expirydate" ></input>
                                </div>
                            </div >
                        }
                        {upi &&
                            <div>
                                <div className="form-groups">
                                    <label htmlFor="holder" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">UPI ID</h6></label>
                                    <input id="upiid" className="mb-4" type="text" name="upiid" placeholder="abc@oksbi" required></input>
                                </div>
                            </div>
                        }
                        {net &&
                            <div>
                                <div className="form-groups">
                                    <label htmlFor="bank" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Bank Name</h6></label>
                                    <input id="bank" className="mb-4" type="text" name="bank" placeholder="type here..."></input>
                                </div>
                                <div className="form-groups">
                                    <label htmlFor="acount" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Account Number</h6></label>
                                    <input id="acount" className="mb-4" type="number" name="acount" placeholder="type here..."></input>
                                </div>
                                <div className="form-groups">
                                    <label htmlFor="ifsc" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">IFSC</h6></label>
                                    <input id="ifsc" className="mb-4" type="number" name="ifsc" placeholder="type here..."></input>
                                </div>

                                <div className="form-groups">
                                    <label htmlFor="branch" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Branch</h6></label>
                                    <input id="branch" className="mb-4" type="text" name="branch" placeholder="type here..."></input>
                                </div>

                            </div>

                        }

                    </div>

                </div>
                <div className="final-submit">
                    <button classname="btn btn-default btn-checkout" type="submit" onSubmit={clickHandleSubmit}>Submit</button>
                </div>
            </form>

        </div>

    )

}