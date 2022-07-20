import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "../../components/Product-Card/product-card.component";

import './features-components.styles.scss';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get('https://shoppingapiacme.herokuapp.com/shopping');
            const productsData = await(res.data);
            setProducts(productsData);
        }

        getProducts();
    }, []);

    return (
        <div>
            <h3>
                Featured Products
            </h3>
            <div className="products-container">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default FeaturedProducts;