import React from 'react';
import Product from '../components/product/Product';
import { useMattressesContext } from '../context/mattressesContext';

const Cart = () => {
    const { cart } = useMattressesContext();

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
