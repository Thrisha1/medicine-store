import React from 'react'
import Cart from '../Components/Cart.jsx'
import Navbar from '../Components/Home/Navbar'
import Mycarthead from '../Components/Home/Mycarthead'

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