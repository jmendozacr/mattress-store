import React, { useState, useEffect } from 'react';
import data from './../api/mattresses.json';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(products[0]);

    const getImage = (image) => {
        return <img src={require(`./../images/${image}`).default} alt="text"/>
    }

    const getProducts = () => {
        const { mattresses } = data;
        const splitObject = Object.keys(mattresses).map(value => {
            return {...mattresses[value], type: value};
        });

        console.log("splitObject", splitObject);
        setSelectedProduct(splitObject[0]);
        return setProducts(products => [...products, ...splitObject]);;
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="row">
            <div className="col-sm-8">
                <section className="container-image">
                    { selectedProduct && getImage(selectedProduct.imageFileName)}
                </section>
            </div>
            <div className="col-sm-4">
                <aside>
                    <h1>Choose Your Mattress</h1>
                    <p className="letter-spacing">SELECT MATTRESS TYPE</p>
                    <div className="btn-group btn-group-md container-type-buttons" data-toggle="button" role="group" aria-label="Button type">
                        {
                            products.length ?
                            products.map(item => (
                                <button
                                    key={item.type} 
                                    onClick={() => setSelectedProduct(item)} 
                                    type="button" 
                                    className={`btn`}>
                                        {item.name}
                                </button>
                            ))
                            : <></>
                        }
                    </div>
                    <div className="container-price">
                        { selectedProduct && <p>{selectedProduct.name} Mattress</p> }
                        { selectedProduct && <p>${selectedProduct.price}</p> }
                    </div>
                    <button className="btn btn-add">
                        Add to Cart
                    </button>
                </aside>
            </div>
        </div>
    );
}

export default Home;
