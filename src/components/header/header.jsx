import { useEffect } from 'react';
import Cart from '../cart/cart';
import './header.css'
const logo = require('../../assets/logo.png');

let listItem = [
    { title: "Home" }, { route: "/" },
    { title: "Offers" }, { route: "/" },
    { title: "Whosale" }, { route: "/" },
    { title: "About" }, { route: "/" },
    { title: "Contact" }, { route: "/" },
]

// function to set ._active class to navbar item 
const setActiveNav = (e) => {
    let navItems = document.querySelectorAll('._nav li')
    navItems.forEach((item) => {
        item.classList.remove('_active')
    })
    e.target.classList.add("_active")
}

const Header = () => {

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo Place" srcSet="" />
            </div>
            <div className="_container">
                <ul className="_nav">
                    {listItem.map((item, key) => (
                        <li onClick={(e) => setActiveNav(e)} key={key} className={item.title}>{item.title}</li>
                    ))}
                </ul>
            </div>
            <Cart ></Cart>
        </header>
    )
}

export default Header