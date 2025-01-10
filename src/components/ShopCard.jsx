import React from 'react'
import image from '../assets/image-product.jpg'
import { useDispatch } from 'react-redux'
import { removeItem } from '../features/cart/cartSlide'
const ShopCard = ({ item }) => {

    const dispatch = useDispatch()



    return (
        <div className="flex items-stretch border rounded pr-4 py-6 mr-4 ml-3 shadow-lg mb-4">
            <div className='w-full bg-gray-200 rounded-lg flex '>
                <div className="w-14 md:w-20 rounded-tr-lg rounded-br-lg overflow-hidden bg-white">
                    <img src={image} alt="product" className="w-full h-full object-cover" />
                </div>

                <div className='flex justify-between items-center w-full pr-3'>
                    <p className="font-medium text-base">{item.title} </p>
                    <div className="flex items-center">
                        <p className="text-lg font-medium mr-2">{item.price}</p>
                        <button className="bg-gray-700 hover:bg-gray-800 text-white rounded p-1 text-xs font-bold"
                            onClick={() => dispatch(removeItem({ id: item.id }))}
                        >
                            X
                        </button>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default ShopCard