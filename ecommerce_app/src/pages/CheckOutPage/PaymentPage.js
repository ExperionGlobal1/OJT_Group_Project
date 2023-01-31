import "./PaymentPage.css";
import { formatPrice } from '../../utils/helpers';
import { getAllCarts } from '../../store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header';
import { removeFromCart } from '../../store/cartSlice';



const CheckOutPage = () => {
    
    const [cardDetails, setCardDetails] = useState(false);
    const [upi, setUpiDetails] = useState(false);
    const [net, setNetDetails] = useState(false);
    // const [message, setMessage] = useState();
    // const [error, setError] = useState(false);
    const [isDisabled, setDisabled] = useState(false);
    
    const carts = useSelector(getAllCarts);
    const { itemsCount, totalAmount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    

    const nav = useNavigate();

    const clickHandleSubmit = () => {
        carts.map((cart) => {
            dispatch(removeFromCart(cart?.id))
        })
        alert("Order confirmed..!!")
        nav('/')
    }
    const handleDisable = () => {
        console.log('Your button was clicked and is now disabled');
        setDisabled(true);
    }

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
        <div className="payments">
            <Header />
            <div className="checkoutt">
                <form onSubmit={clickHandleSubmit}>
                    <div className="data-side">

                        <div className='cart-cbody bg-white checkout-body' >
                            <div className='total-txt flex align-center justify-end'>
                                <div className='font-manrope fw-5'>Total ({itemsCount}) items: </div>
                                <span className='text-orange fs-22 mx-2 fw-6'>{formatPrice(totalAmount)}</span>
                            </div>

                            <div className="payment">
                                <label htmlFor="pin">Net Banking</label>

                                <input type="radio" value="option1" name="check" onChange={handleNet} required ></input>

                                <label htmlFor="upi">UPI</label>
                                <input type="radio" value="option2" name="check" onChange={handleUpi} required ></input>

                                <label htmlFor="card">Card</label>
                                <input type="radio" value="option3" name="check" onChange={handleCard} required></input>

                            </div>
                            {cardDetails &&
                                <div>
                                    <div className="form-groups">
                                        <label htmlFor="holder" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Holder Name</h6></label>
                                        <input id="holder" className="mb-4" type="text" name="holder" placeholder="Enter card holder name" required></input>
                                    </div>
                                    <div className="form-groups">
                                        <label htmlFor="cardnum" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Card Number</h6></label>
                                        <input id="cardnum" className="mb-4" type="number" name="cardnum" placeholder="0000 0000 0000 0000" required></input>
                                    </div>
                                    <div className="pincode">
                                        <label htmlFor="cvv" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">CVV</h6></label>
                                        <input id="cvv" className="mb-4" type="text" name="cvv" maxLength="3" placeholder="123" required></input>
                                    </div>
                                    
                                    <div className="pincode">
                                        <label htmlFor="expirydate" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Expiry Date</h6></label>
                                        <input id="expirydate" className="mb-4" type="date" name="expirydate" required></input>
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
                                        <input id="bank" className="mb-4" type="text" name="bank" placeholder="type here..." required></input>
                                    </div>
                                    <div className="form-groups">
                                        <label htmlFor="acount" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Account Number</h6></label>
                                        <input id="acount" className="mb-4" type="number" name="acount" placeholder="type here..." required></input>
                                    </div>
                                    <div className="form-groups">
                                        <label htmlFor="ifsc" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">IFSC</h6></label>
                                        <input id="ifsc" className="mb-4" type="number" name="ifsc" placeholder="type here..." required></input>
                                    </div>

                                    <div className="form-groups">
                                        <label htmlFor="branch" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Branch</h6></label>
                                        <input id="branch" className="mb-4" type="text" name="branch" placeholder="type here..." required></input>
                                    </div>

                                </div>

                            }

                        </div>

                    </div>
                    <div className="final-submit" >
                        <div>
                            <Link to="/checkout">
                                <button classname="btn btn-default btn-checkout" type="submit" style={{ marginLeft: "10px", backgroundcolor: "black", color: "white", width: "auto", height: "45px" }} >Back </button>
                            </Link>
                        </div>
                        <div>

                            <button classname="btn btn-default btn-checkout" type="submit" style={{ width: "100px", height: "45px", color: "white" }} >Submit</button>
                        </div>




                    </div>


                </form>

            </div>
        </div>

    );

};
export default CheckOutPage;