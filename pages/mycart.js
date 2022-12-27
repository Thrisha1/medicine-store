import React from 'react'
import Cart from '../Components/Cart/Cart.jsx'
import Navbar from '../Components/Home/Navbar'
import Mycarthead from '../Components/Cart/Mycarthead'
import Totalprice from '../Components/Cart/Totalprice.jsx'

function Product() {
  return (
    <div>
        <Navbar/>
        <div class="flex">
          <div class="w-3/4">
              <Mycarthead/>
              <Cart/>
          </div>
          <div class="w-1/4 fixed right-0 p-10">
          <Totalprice/>
          </div>
        </div>
    </div>
  )
}

export default Product