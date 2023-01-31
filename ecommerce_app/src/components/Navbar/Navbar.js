import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllCategories } from '../../store/categorySlice';
import { setSidebarOn } from '../../store/sidebarSlice';
import { getAllCarts, getCartItemsCount, getCartTotal } from '../../store/cartSlice';
import CartModal from "../CartModal/CartModal";


export default function Navbar(props) {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts])


  return (
    <nav className='navbar'>
      <div className='navbar-cnt flex align-center'>
        <div className='brand-and-toggler flex align-center'>
          <button type="button" className='sidebar-show-btn text-black' onClick={() => dispatch(setSidebarOn())}>
            <i className='fas fa-bars'></i>
          </button>
          <Link to="/home" className='navbar-brand flex align-center'>
            <span className='navbar-brand-ico'>
              <i className='fa-solid fa-bag-shopping' style={{ color: "white" }}></i>
            </span>
            <span className='navbar-brand-txt mx-2'>
              <span className='fw-7'>Ecart</span>
            </span>
          </Link>
        </div>
        <div className='navbar-collapse w-100'>


          <div className="d-flex" style={{ textAlign: 'center', marginTop: '20px' }}>
            <div className='form-control me-2 '>
              <input className="form-control me-2" type="search" placeholder="Search your preferred items here" aria-label="Search"
                style={{ width: '400px', height: '40px' }} onChange={(e) => handleSearchTerm(e)} />
              <Link to={`search/${searchTerm}`} className="search-btn justify-center"  >
                <i className='fa-solid fa-magnifying-glass' style={{ marginRight: '50px', color: 'white' }}></i>
              </Link>
            </div>
          </div>


          <ul className='navbar-nav flex align-center fs-12 fw-4 font-manrope' style={{ color: 'white' }}>
            {
              // taking only first 12 categories
              categories.slice(0, 10).map((category, idx) => (
                <li className='nav-item no-wrap' key={idx}>
                  <Link to={`category/${category}`} className='nav-link text-capitalize'>{category.replace("-", " ")}</Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div className='navbar-cart flex align-center'>
          {/* //link is cart */}
          <Link to="/cart" className='cart-btn'>
            <i className='fa-solid fa-cart-shopping' style={{ marginRight: '10px' }}></i>
            <div className='cart-items-value' style={{ marginRight: '10px' }} >{itemsCount}</div>
            <CartModal carts={carts} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

