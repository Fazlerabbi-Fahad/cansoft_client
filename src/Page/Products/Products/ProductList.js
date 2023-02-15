import React from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProductList = ({ product }) => {
    const { _id, id, thumbnail, title, price, rating, stock, category } = product;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={thumbnail} alt="Products Thumbnail" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{id}</td>
            <td>{title}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{stock}</td>
            <td>{category}</td>
            <td>
                <button title='Edit' className="btn btn-ghost btn-xs"><Link to={`/products/${_id}`}><FiEdit3 className='text-xl'></FiEdit3></Link></button>
            </td>
        </tr>
    );
};

export default ProductList;