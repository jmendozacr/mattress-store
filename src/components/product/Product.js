import React from 'react';

const Product = ({ product }) => {
    // ./../images/${product.imageFileName}
    return (
        <li>
            <img src={require(`./../../images/${product.imageFileName}`).default} alt="product"/>
            <div className="d-flex copy">
                <p>{product.name} x {product.quantity}</p>
                <p className="price"> <strong>${product.price.toFixed(2)}</strong></p>
            </div>
        </li>
    );
}

export default Product;
