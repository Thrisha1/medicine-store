import React from 'react'
import Cart from '../Components/Cart/Cart.jsx'
import Navbar from '../Components/Home/Navbar'
import Mycarthead from '../Components/Cart/Mycarthead'

function Product() {
  return (
    <div>
        <Navbar/>
        <div class="w-3/4">
            <Mycarthead/>
            <Cart/>
        </div>
    </div>
  )
}

export default Product