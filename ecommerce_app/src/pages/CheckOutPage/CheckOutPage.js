import "./CheckOutPage.css";
import { formatPrice } from '../../utils/helpers';
import { getAllCarts } from '../../store/cartSlice';
import { useSelector } from 'react-redux';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Header from "../../components/Header/Header";


export default function CheckOutPage() {
    const nav =useNavigate();
    const [isDisabled, setDisabled] = useState(false);

    const clickHandleSubmit = () => {
        alert("Pay to confirm your order..!!")
        nav('/payment')

    }
    const handleDisable = () => {
        console.log('Your button was clicked and is now disabled');
        setDisabled(true);
    }
    const carts = useSelector(getAllCarts);
    const { itemsCount, totalAmount } = useSelector((state) => state.cart);

    return (
        <>
        <Header/>
            <div className="checkoutt-page">

                <form onSubmit={clickHandleSubmit}>
                    <h2 class="text-center">Deliver to:</h2>
                    <div className="data-side">

                        <div className="details">

                            <div className="form-groups-check">
                                <label htmlFor="firstname" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">First Name</h6></label>
                                <input id="firstname" className="mb-4" type="text" name="firstname" placeholder="Enter first name" required></input>
                            </div>
                            <div className="form-groups-check">
                                <label htmlFor="lastname" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Last Name</h6></label>
                                <input id="lastname" className="mb-4" type="text" name="lastname" placeholder="Enter last name" required></input>
                            </div>
                            <div className="form-groups-check">
                                <label htmlFor="phn" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Mobile Number</h6></label>
                                <input id="phn" className="mb-4" type="number" name="phn" placeholder="Enter Mobile No" required></input>
                            </div>
                            <br></br>
                            <div className="address">
                                <label htmlFor="address" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">Address</h6></label>
                                <input id="fulladdress" className="fulladdress" type="text" name="fulladdress" placeholder="Enter your full address..." required></input>
                            </div>
                            <br></br>
                            <div className="side-data">
                                <div className="pincd">
                                    <label htmlFor="pin" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">PIN CODE</h6></label>
                                    <input id="pin" className="mb-4" type="number" name="pin" placeholder="Enter pin code"required></input>
                                </div>
                                <div className="state">
                                    <label htmlFor="state" className="mb-1"><h6 className="mb-0 text-sm" id="lab12">State</h6></label>
                                    <select id="state" className="mb-4" type="text" name="state" required>
                                        <option>select </option>
                                        <option>Kerala </option>
                                        <option>Tamil Nadu</option>
                                        <option>Karnataka</option>
                                        <option>Goa</option>
                                        <option>Bihar</option>

                                    </select>
                                </div>
                            </div>
                                <button className="btn btn-default bttn-proceed" style={{marginTop:"50px",marginLeft:"280px"}} >Proceed to Pay</button>
                    
                        </div>
                        <div className="box">
                            {
                                carts.map((cart, idx) => {
                                    return (
                                        <div className='cart-ctr py-4' key={cart?.id}>
                                            <div className='cart-one'>
                                                <span className='cart-ctxt'>{cart?.title}</span>
                                            </div>

                                            <div className='cart-one'>
                                                <span className='cart-ctxt text-orange fw-5'>{formatPrice(cart?.totalPrice)}</span>
                                            </div>


                                        </div>
                                    )
                                }
                                )
                            }
                            <div className='cart-cbody bg-white checkout-body'>
                                <div className='total-txt flex align-center justify-end'>
                                    <div className='font-manrope fw-5'>Total ({itemsCount}) items: </div>
                                    <span className='text-orange fs-22 mx-2 fw-6'>{formatPrice(totalAmount)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )

}