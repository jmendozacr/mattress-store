import React from 'react';

const Home = () => {
    const imageName = 'classic-carousel.jpg';

    const getImage = (image) => {
        return <img src={require(`./../images/${image}`).default} alt="text"/>
    }

    return (
        <div className="row">
            <div className="col-sm-8">
                <section className="container-image">
                    {getImage(imageName)}
                </section>
            </div>
            <div className="col-sm-4">
                <aside>
                    <h1>Choose Your Mattress</h1>
                    <p className="letter-spacing">SELECT MATTRESS TYPE</p>
                    <div className="btn-group btn-group-md container-type-buttons" role="group" aria-label="Button type">
                        <button type="button" className="btn active">Saatva Classic</button>
                        <button type="button" className="btn">Loom & Leaf</button>
                        <button type="button" className="btn">Zenhaven</button>
                    </div>
                    <div className="container-price">
                        <p>Name Mattress</p>
                        <p>$2000</p>
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
