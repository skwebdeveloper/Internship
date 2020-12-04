import React from 'react'

// ============================================
// Well I case of React we use React Router but for now I simply use ul and li to show navigation bar
// ============================================

const Navbar = () => {
    return (
        <div className="app__navbar">
            <div className="app__navbar__left">
            <ul className="app__navbar__ul">
            <li><a href="#Shop">Shop</a></li>
            <li><a href="#Read">Read</a></li>
            <li><a href="#Stores">Stores</a></li>
            <li><a href="#Search">Search</a></li>
            <li style={{ float:"right" }}><a href="#Login">Login</a></li>
            <li style={{ float:"right" }}><a href="#Cart">Cart</a></li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar
