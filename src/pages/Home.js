import React from 'react';

const Home = () => {
    const imageName = 'classic-carousel.jpg';

    const getImage = (image) => {
        return <img src={require(`./../images/${image}`).default} />
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
                    <p>description</p>
                </aside>
            </div>
        </div>
    );
}

export default Home;
