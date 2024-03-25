import React from 'react'
import CartCard from '../Components/CartCard'

import { GrRestaurant } from "react-icons/gr";


function Cart() {
    const cards = [
        {
            title: "Cheesy hot mexican burger",
            quantity: 4,
            price: "₹ 124",
            isVeg: 'False',
            imageUrl: "https://s3-alpha-sig.figma.com/img/0ba9/fc8c/844ba069f11767c33eb7eda242ad341d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OgCyTzGnBkTzRmikekdAZDLgbqIm1HNilGf7GL1lIyW74kSbCZNXfvxUIBw4JN97mf50fuWwelYprHLtRHImvEALmeMsdUqwccxIKnYKlkZTpL203lizx~~AA~qfazq8lL6Q03P5tLaT7UwFrB98lAhcK9Q2-d2EEy6Z9n6fF8C0ggWglykrtAFuD8sMJfjn0UlUnWFLsZfzljmhUxvC6QxBnCFgtOWC3jVlwTR47EPhyH7LbKcS8ThVeLNTmbOHq4D-XcMP-HshEKuC9xLGA9yJCPrJMP83488u7qTFPL6Khp~QT0OHhqePhmDoB2J50krPxcVkEn1UnckHqbQ0dw__"
        },
        {
            title: "Italian veg wrap",
            quantity: 3,
            price: "₹ 235",
            isVeg: 'True',
            imageUrl: "https://s3-alpha-sig.figma.com/img/211a/7c08/97b3e24c9ea930640511205b923f9f9f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MvcgzRqNxAM3nXvinNnDWa0Ym-aI-~Hnso4U03XTs1rtGEPHhUvTuQFGqhvlh0pL7l22HpoYM8C70IlGY~ynZsfctymEzd7qqqjZ6lnbJyndtgp5o8xXfI2xkASbcjrzQZDFiT~JDaCJXC5Gh~A9OJSBPl8QoDCA6NUPmCQd38WsuPcTpIz84eLGieGM7jDBz1NgJe6RDotLRcdLqRMAqsXkz06aLCvWjYG2mxWuU27UOqMsaH2Z3vQCvD8-gWmco3qcSxW9ZBuyr-gNfHyR-I3s6PN3HxUTzNdZtrZVgDF4kJGuj9T-YL0c9Al2ij4vzoTlKxhdA7wKS-nFhdJUSw__"
        },

    ];
    return (
        <>
            <div className="mt-10">
                <h1 className="text-2xl font-semibold mt-6 ml-16  " >MY CART</h1>
                <h3 className="text-lg font-medium  ml-16 text-slate-600">3 item(s) in cart</h3>
            </div>
            <CartCard cards={cards} />

            <div className="rounded-2xl border border-gray-300 shadow-sm p-4 w-full md:w-36 h-10 mt-6 md:mt-10 md:ml-auto md:mr-auto flex justify-center items-center">
                <p className="text-lg font-semibold" style={{ color: '#E78F00' }}>Take notes</p>
            </div>

            <div className="rounded-xl shadow-xl w-full md:w-10/12 lg:w-8/12 xl:w-7/12 md:h-70 md:ml-auto md:mr-auto md:mt-8 mt-8 flex-col md:flex-row p-4 md:p-16 border border-slate-100">
                <p className="text-lg font-semibold mb-4 md:mb-0">Cart Total</p>
                <div className="flex flex-col md:flex-row items-center justify-between w-full mt-4 md:mt-8">
                    <p className="text-lg font-normal mb-2 md:mb-0">Items Total</p>
                    <p className="text-lg font-normal md:ml-auto">₹945</p>
                </div>
                <div className="border-b border-gray-300 w-full mt-3"></div>

                <div className="flex flex-col md:flex-row items-center justify-between w-full mt-4 md:mt-8">
                    <p className="text-lg font-normal mb-2 md:mb-0">GST and Restaurant charges</p>
                    <p className="text-lg font-normal md:ml-auto">₹47.50</p>
                </div>
                <div className="border-b border-gray-300 w-full mt-3"></div>

                <div className="flex flex-col md:flex-row items-center justify-between w-full mt-4 md:mt-8">
                    <p className="text-lg font-semibold mb-2 md:mb-0">Order Total</p>
                    <p className="text-lg font-semibold md:ml-auto">₹992</p>
                </div>
            </div>



            <div className="flex justify-between items-center rounded-3xl shadow-xl w-full md:w-10/12 lg:w-8/12 xl:w-7/12 md:h-70 md:ml-auto md:mr-auto md:mt-16 mt-16 flex-col md:flex-row md:p-10 border" style={{ backgroundColor: '#41665D' }}>
                <div className="flex items-center mt-6 md:mt-2">
                    <GrRestaurant className='h-10 w-10 text-white' />
                    <h2 className="text-white text-lg md:text-xl font-semibold ml-2 md:ml-4">Table 5</h2>
                </div>
                <div className="flex items-center mt-2 md:mt-2 md:ml-auto">
                    <button className="w-32 md:w-48 md:h-12 h-6 rounded-3xl flex items-center justify-center bg-white">
                        <h2 className="text-lg md:text-xl font-semibold ml-2  md:ml-2">Place Order</h2>
                    </button>
                </div>
            </div>









        </>


    )
}

export default Cart