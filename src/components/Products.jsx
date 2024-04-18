import React, { useState, useEffect } from 'react';
import { getDatas } from '../Api/productApi';
import './style.css'
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
       
        GetDatas();
    }, []);
    const GetDatas = async () => {
        try {
            const data = await getDatas();
            console.log("Eeeee",data);
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };


    const handlecreate = () => {
        navigate('CreateProduct');
    }
   

    return (
        <div>
            <h3>Products List</h3>
            <table>
                <thead>
                    <tr>
                        <th>ProductName</th>
                        <th>ProductPrice</th>
                        <th>ProductQuantity</th>
                        <th>actions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product.productname}</td>
                            <td>{product.productprice}</td>
                            <td>{product.productquantity}</td>

                            <td><button>Delete</button></td>
                            <td><button>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handlecreate}>ADD-Product</button>
        </div>
    );
};

export default Products;
