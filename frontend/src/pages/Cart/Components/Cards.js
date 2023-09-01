import React from "react";

function Cards({ products }) {

    const size = "oi"
    
    return (
        <div id="card">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <div id="container">
                        <div id="cardImg">
                            <img src="https://via.placeholder.com/120x120" alt="" />
                        </div>
                        <div id="cardItens">
                            <div id="CardTitle">
                                <h1 className="cardTitle">{product.name}</h1>
                            </div>
                            <div id="cardFunctions">
                                <p className="price">{`R$${product.price.toFixed(2)}`}</p>
                                <div id="amount">
                                    {
                                        size != "" ? (
                                            <p className="amount">M</p>
                                        ) : (
                                            <p></p>
                                        )
                                    }
                                </div>
                                <div id="cardCounter">
                                    <button className="add">+</button>
                                    <span className="amount">
                                        <p>1</p>
                                    </span>
                                    <button className="remove">-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Cards;
