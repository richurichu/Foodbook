import React from 'react'
import { LuMinus, LuPlus } from "react-icons/lu";
import { MdClose } from 'react-icons/md';


function CartCard({ cards }) {
    return (
        <>
            {cards.map((card, index) => (
                <div className="relative rounded-xl border border-gray-100 shadow-xl p-8 w-full md:w-12/12 lg:w-8/12 xl:w-7/12 h-auto md:h-64 md:ml-8 md:mt-8 mt-8 flex flex-col md:flex-row">
                    <div className="w-full md:w-3/4 flex flex-col">
                        <div className="flex items-center mt-4 md:mt-8">
                            <div className={`w-4 h-4 rounded-full ${card.isVeg === 'True' ? 'bg-green-500' : 'bg-red-500'} mt-1 md:mt-2`}></div>
                            <h2 className="text-lg md:text-xl font-semibold ml-2 md:ml-4">{card.title}</h2>
                        </div>
                        <div className="flex items-center justify-start mt-4 md:mt-8 ml-6">
                            <div className="flex items-center justify-center rounded-l-3xl rounded-r-md bg-gray-300 p-2 md:p-4 w-8 md:w-12 h-4">
                                <LuMinus />
                            </div>
                            <h2 className="text-base md:text-xl font-semibold ml-1 md:ml-2 mr-1 md:mr-2">{card.quantity}</h2>
                            <div className="flex items-center justify-center rounded-r-3xl rounded-l-md bg-gray-300 p-2 md:p-4 w-8 md:w-12 h-4">
                                <LuPlus />
                            </div>
                            <h2 className="text-xl md:text-3xl font-semibold ml-4 md:ml-8" style={{ color: '#E78F00' }}> {card.price}</h2>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 flex justify-center items-center mt-4 md:mt-0 mr-4  relative">
                        <img src={card.imageUrl} alt="Your Image" className="rounded-lg" />

                    </div>
                    <div className="absolute top-0 right-0  m-2">
                        <MdClose className="w-8 h-8 md:w-10 md:h-10 lg:w-10 lg:h-10" style={{ color: 'rgba(0, 0, 0, 0.5)' }} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default CartCard