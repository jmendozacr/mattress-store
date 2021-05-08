import React from 'react';
import Product from '../components/product/Product';
import { useMattressesContext } from '../context/mattressesContext';

const Cart = () => {
    const { cart, total, count } = useMattressesContext();

    return (
        <div className="row">
            <div className="col-sm-8">
                <section className="product-list">
                    <ul>
                        {
                            cart.length > 0 ?
                                cart.map((product, index) => (
                                    <Product key={index} product={product}/>
                                ))
                                : <h3>No items added</h3>
                        }
                    </ul>
                    <div className="sub-total-container d-flex align-items-end">
                        <span className="ml-auto">Subtotal ({count} products): <strong>US ${total}</strong></span>
                    </div>
                </section>
            </div>
            <div className="col-sm-4">
                <aside>

                </aside>
            </div>
        </div>
    );
}

export default Cart;
