
import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css"
const NavBar = () => {
  return (
    <nav>
      <h1>Clothes</h1>
      <li><a href="">Remeras</a></li>
      <li><a href="">Camisas</a></li>
      <li><a href="">Pantalones</a></li>
    
    <div>
      <h3>Carrito</h3>
      <CartWidget />
    </div>

    </nav>
  )
}

export default NavBar