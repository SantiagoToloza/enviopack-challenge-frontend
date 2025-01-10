import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className="p-4 mx-auto max-w-lg text-center flex flex-col  ">
            <h1 className="text-2xl font-bold mb-4">Estado de compra</h1>
            <div className='w-full rounded-lg shadow-md flex flex-col items-center p-4 flex-wrap'>
                <p>Ocurrió un error con la compra, revisá que el importe no supere el crédito disponible en tu cuenta</p>
                <Link to="/cart" className="bg-black text-white px-4 py-2 rounded mt-4 w-full  ">
                    Volver al carrito
                </Link>
            </div>
        </div>
    )
}


export default Error