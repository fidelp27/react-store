import React, { useState, useContext } from 'react';
import '@components/menu';
import '@styles/header.scss';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shopping_cart from '@icons/icon_shopping_cart.svg';
import AppContext from '../context/appContext';
import MyOrder from '../containers/myOrder';
import Menu from './menu';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);
  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
    setToggleOrders(false);
  };

  const handleToggleOrder = () => {
    state.cart.length > 0 &&
      setToggleOrders((prevToggleOrders) => !prevToggleOrders);
    setToggle(false);
  };

  return (
    <nav>
      <img src={menu} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => handleToggleOrder()}
          >
            <img src={shopping_cart} alt="shopping cart" />
            {state.cart.length > 0 && <div> {state.cart.length}</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder handleToggleOrder={handleToggleOrder} />}
    </nav>
  );
};

export default Header;
