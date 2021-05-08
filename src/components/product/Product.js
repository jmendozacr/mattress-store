import React from 'react';

const Product = ({ product }) => {
    // ./../images/${product.imageFileName}
    return (
        <li>
            <img src={require(`./../../images/${product.imageFileName}`).default} alt="default-image"/>
            <div className="d-flex copy">
                <p>{product.name} x {product.quantity}</p>
                <p className="price">${product.price.toFixed(2)}</p>
            </div>
            {/* <p>{product.name}</p>
            <p className="ml-auto">{product.price}</p> */}
        </li>
    );
}

export default Product;
