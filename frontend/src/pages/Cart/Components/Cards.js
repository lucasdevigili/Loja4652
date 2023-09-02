import React, { useState, useEffect } from "react";

function Cards({ products }) {
      const [amounts, setAmounts] = useState({});

    // Efeito colateral para configurar os valores iniciais de amount
    useEffect(() => {
        const initialAmounts = {};
        products.forEach((product) => {
            if (product.amount !== undefined && product.amount > 0) {
                initialAmounts[product.id] = product.amount;
            }
        });
        setAmounts(initialAmounts);
    }, [products]);

    const handleIncrement = (productId) => {
        setAmounts((prevAmounts) => ({
            ...prevAmounts,
            [productId]: (prevAmounts[productId] || 0) + 1,
        }));
    };

    const handleDecrement = (productId) => {
        setAmounts((prevAmounts) => {
            const currentAmount = prevAmounts[productId] || 0;
            if (currentAmount > 0) {
                return {
                    ...prevAmounts,
                    [productId]: currentAmount - 1,
                };
            }
            return prevAmounts;
        });
    };

    return (
        <div id="card">
          {products.map((product) => {
            const total = product.price * (amounts[product.id] || 0);
            return (
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
                      <p className="price">{`R$${total.toFixed(2)}`}</p>
                      <div id="size">
                        {product.size}
                      </div>
                      <div id="cardCounter">
                        <button className="add" onClick={() => handleIncrement(product.id)}>
                          +
                        </button>
                        <div id="amount">
                          {amounts[product.id] !== undefined ? (
                            <p className="amount">{amounts[product.id]}</p>
                          ) : null}
                        </div>
                        <button className="remove" onClick={() => handleDecrement(product.id)}>
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
}

export default Cards