import React from 'react';
import { useMattressesContext } from '../context/mattressesContext';
import Button from './../components/button/Button';

const Home = () => {
    const {
        products, 
        active, 
        cart, 
        selectedProduct,
        onAddProduct,
        setActiveProduct
    } = useMattressesContext();

    const getImage = () => {
        const imageName = selectedProduct !== undefined ? selectedProduct.imageFileName : 'classic-carousel.jpg';

        return <img src={require(`./../images/${imageName}`).default} alt="text"/>
    }

    console.log("cart", cart);
    return (
        <div className="row">
            <div className="col-sm-8">
                <section className="container-image">
                { getImage() }
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

export default Home;
