import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
    const product = useLoaderData();
    const { _id, title, images, description, price, discountPercentage, rating, stock, brand, category } = product;

    const handleEdit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const price = form.price.value;
        const discountPercentage = form.discountPercentage.value;
        const rating = form.rating.value;
        const stock = form.stock.value;
        const brand = form.brand.value;
        const category = form.category.value;


        const product = {
            title: title,
            description: description,
            price: price,
            discountPercentage: discountPercentage,
            rating: rating,
            stock: stock,
            brand: brand,
            category: category
        }
        console.log(product);


        fetch(`https://cansoft-server-fazlerabbi-fahad.vercel.app/products/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => { })
            .catch(error => console.log(error))
    }

    return (
        <div className='lg:ml-5'>
            <div className="h-96 carousel carousel-vertical center block my-3">
                <div className="carousel-item h-full">
                    <img src={images[0]} alt={title} />
                </div>
                <div className="carousel-item h-full">
                    <img src={images[1]} alt={title} />
                </div>
                <div className="carousel-item h-full">
                    <img src={images[2]} alt={title} />
                </div>
                <div className="carousel-item h-full">
                    <img src={images[3]} alt={title} />
                </div>

            </div>
            <div className='my-3'>
                <div className='lg:w-[50vw]'>
                    <div className="card ">
                        <div className="card shadow-3xl p-10 glass ">
                            <form onSubmit={handleEdit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Title</span>
                                    </label>
                                    <input type="text" defaultValue={title} name="title" className="input input-bordered text-white" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Description</span>
                                    </label>
                                    <input type="text" defaultValue={description} name="description" className="input input-bordered text-white" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Price</span>
                                    </label>
                                    <input type="text" defaultValue={price} name="price" className="input input-bordered text-white" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Discount Percentage</span>
                                    </label>
                                    <input type="text" defaultValue={discountPercentage} name="discountPercentage" className="input input-bordered text-white" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Rating</span>
                                    </label>
                                    <input type="text" defaultValue={rating} name="rating" className="input input-bordered text-white" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Stock</span>
                                    </label>
                                    <input type="text" defaultValue={stock} name="stock" className="input input-bordered text-white" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Brand</span>
                                    </label>
                                    <input type="text" defaultValue={brand} name="brand" className="input input-bordered text-white" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Category</span>
                                    </label>
                                    <input type="text" defaultValue={category} name="category" className="input input-bordered text-white" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className='btn btn-primary text-white' type="submit">Update</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;