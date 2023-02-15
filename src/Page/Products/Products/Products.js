import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Thumbnail</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Stock</th>
                        <th>Category</th>
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