import React from 'react'
import Button from '../components/Button'
function Hero() {
  return (
    <div className=' w-full h-screen  '>
        <div className=' pt-32 mt-11 flex flex-col items-start px-4 gap-3 w-full '>
          <p className=' font-medium text-xl text-orange-300'>Our summer collection</p>
          <h1 className=' font-semibold text-2xl md:text-8xl'><span>The new arivale</span><br />
          <span className=' text-orange-400'>Nike </span>
          Shoes</h1><br />
          <span> Descover nike shes and new nike in our web site with top price</span>
      <Button />
        </div>
        <div className=' text-xl font-black size-7 gap-20 ms-4 flex flex-wrap w-full mt-24 items-start justify-start'>

            <div>
                <p>1K +</p>
                <p>Products</p>
            </div>
            <div>
                <p>500 +</p>
                <p>Orders</p>
            </div>
            <div>
                <p>250k +</p>
                <p>costumres</p>
            </div>
        </div>
    </div>
  ) 
}

export default Hero