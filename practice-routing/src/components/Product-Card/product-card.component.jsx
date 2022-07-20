import { Link } from "react-router-dom";

import './product-card.styles.scss';

const ProductCard = ({product}) => {
    return (
        <div className="card-container">
            <img src={product.image} alt="" />
            <h5>{product.brand}</h5>
            <p>{product.item}</p>
            <Link to={`/product/${product.id}`}>View</Link>
        </div>
    );
}

export default ProductCard;


