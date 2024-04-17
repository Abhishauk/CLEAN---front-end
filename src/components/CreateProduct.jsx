import React, { useState } from 'react';
import './style.css';

const CreateProduct = () => {
    const [productname, setProductName] = useState("");
    const [productprice, setProductPrice] = useState("");
    const [productquantity, setProductQuantity] = useState("");

    const createProduct = async () => {
        try {
            
        } catch (error) {
            console.error("Error creating product:", error);
        }
    }

    return (
        <div className="create-product-container">
            <div>
                <span>Create Product</span>
                <form>
                    <input
                        type='text'
                        placeholder='Product Name'
                        value={productname}
                        id='ProductName'
                        onChange={e => setProductName(e.target.value)}
                    />

                    <input
                        type='text'
                        placeholder='Price'
                        value={productprice}
                        id='ProductPrice'
                        onChange={e => setProductPrice(e.target.value)}
                    />

                    <input
                        type='text'
                        placeholder='Quantity'
                        value={productquantity}
                        id='ProductQuantity'
                        onChange={e => setProductQuantity(e.target.value)}
                    />
                    <button
                        type='button'
                        onClick={createProduct}>
                        Create Product
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct;
