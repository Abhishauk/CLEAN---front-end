import React, { useState, useEffect } from 'react';
import { getDatas ,DeleteData ,Editdata } from '../Api/productApi';
import './style.css'
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
       
        GetData();
    }, []);
    const GetData = async () => {
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
    const handledelete =async (id) => {
       
        try {
            await DeleteData(id);
            GetData()
            
        } catch (error) {
            
        }

    }
    const handleedit = async (id) => {
        try {
            navigate('EditProduct')
            
            
        } catch (error) {
            
        }
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

                            <td><button onClick={()=> handledelete(product._id)}>Delete</button></td>
                            <td><button onClick={() => handleedit(product._id)}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handlecreate}>ADD-Product</button>
        </div>
    );
};

export default Products;
