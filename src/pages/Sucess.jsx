import React from 'react'
import { Link } from 'react-router-dom'

const Sucess = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Compra Exitosa</h1>
            <p>¡Tu compra se ha realizado con éxito!</p>
            <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                Volver al Catálogo
            </Link>
        </div>
    )
}

export default Sucess