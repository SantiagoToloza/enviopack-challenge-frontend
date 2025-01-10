import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterProducts, sortProducts, setCurrentPage } from '../features/products/productSlide.js';
import ProductCard from '../components/ProductCard';

const Catalogo = () => {
    const dispatch = useDispatch();
    const { filteredProducts, currentPage, itemsPerPage } = useSelector((state) => state.products);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState('');

    // Paginación
    //revisar prox commit 
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber));
    };

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        dispatch(filterProducts(term));
    };

    const handleSort = (e) => {
        const type = e.target.value;
        setSortType(type);
        dispatch(sortProducts(type));
    };

    return (
        <div className="p-4 mx-auto w-1/2 h-auto min-h-3/4 ">
            <h1 className="text-3xl font-bold mb-4 text-center  ">Catálogo</h1>


            <div className="flex gap-4 mb-4  justify-between">
                <input
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border p-2 rounded"
                />
                <select value={sortType} onChange={handleSort} className="border p-2 rounded">
                    <option value="">Seleccionar</option>
                    <option value="cheapest">Más baratos</option>
                    <option value="mostExpensive">Más caros</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-3/4">
                {currentItems.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }).map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Catalogo;