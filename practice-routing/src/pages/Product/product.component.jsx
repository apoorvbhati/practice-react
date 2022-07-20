import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import { Link } from "react-router-dom";

import './product-component.styles.scss';

const Product = () => {
    const [productData, setProductData] = useState([]);
    const {id} = useParams();

    console.log(id);

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get(`https://shoppingapiacme.herokuapp.com/shopping/${id}`);
            const data = await(res.data);
            setProductData(data);
            console.log(data);
        }

        getProducts();
    }, [id]);

    return (
        <section>
            <div className="container">
                <div className="img-container">
                    <img src={productData.image} alt="" />
                </div>
                <div>   
                    <h3>{productData.brand}</h3>
                    <h5>{productData.item}</h5>
                    <p>{productData.description}</p>
                    <p><strong>Price: </strong>{productData.price}</p>
                    <p><strong>Color: </strong>{productData.color}</p>
                </div>
                <div className="link-container">
                    <Link to='/'>Featured Products</Link>
                </div>
            </div>
        </section>
    );
}

export default Product;