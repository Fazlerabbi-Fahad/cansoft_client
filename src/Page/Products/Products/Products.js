import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://cansoft-server-fazlerabbi-fahad.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="overflow-x-auto w-full glass">
            <table className="table w-full glass">
                <thead>
                    <tr>
                        <th className='text-white'>Thumbnail</th>
                        <th className='text-white'>ID</th>
                        <th className='text-white'>Title</th>
                        <th className='text-white'>Price</th>
                        <th className='text-white'>Rating</th>
                        <th className='text-white'>Stock</th>
                        <th className='text-white'>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <ProductList
                                key={product.id}
                                product={product}
                            ></ProductList>
                        )
                    }
                </tbody>
            </table>
        </div>

    );
};

export default Products; 