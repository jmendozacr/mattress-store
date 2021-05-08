import React, { useState, useEffect } from 'react';
import data from './../api/mattresses.json';
import Button from './../components/button/Button';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(products[0]);
    const [active, setActive] = useState(0);
    const [cart, setCart] = useState([]);
    // const [loading, setLoading] = useState(true);

    const getImage = (image) => {
        return <img src={require(`./../images/${image}`).default} alt="text"/>
    }

    const getProducts = () => {
        const { mattresses } = data;

        setProducts(
            Object.keys(mattresses).map(value => {
                return {...mattresses[value], type: value}
            })
        );
    }

    const setActiveProduct = (item, index) => {
        setActive(index);
        setSelectedProduct(item);
    }

    const onAddProduct = (product) => {
        const exist = cart.find(item => item.type === product.type);

        if(exist) {
            setCart(
                cart.map(item => 
                    item.type === product.type ? {...exist, quantity: exist.quantity + 1} : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="row">
            <div className="col-sm-8">
                <section className="container-image">
                    { selectedProduct ? getImage(selectedProduct.imageFileName) : ''}
                </section>
            </div>
            <div className="col-sm-4">
                <aside>
                    <h1>Choose Your Mattress</h1>
                    <p className="letter-spacing">SELECT MATTRESS TYPE</p>
                    <div className="btn-group btn-group-md container-type-buttons" data-toggle="button" role="group" aria-label="Button type">
                        {
                            products.length ?
                            products.map((item, index) => (
                                <Button
                                    key={index}
                                    item={item}
                                    index={index}
                                    active={active}
                                    setActiveProduct={setActiveProduct}
                                />
                            ))
                            : <></>
                        }
                    </div>
                    <div className="container-price">
                        { selectedProduct && <p>{selectedProduct.name} Mattress</p> }
                        { selectedProduct && <p>${selectedProduct.price.toFixed(2)}</p> }
                    </div>
                    <button onClick={() => onAddProduct(selectedProduct)} className="btn btn-add">
                        Add to Cart
                    </button>
                </aside>
            </div>
        </div>
    );
}

export default React.memo(Home);
