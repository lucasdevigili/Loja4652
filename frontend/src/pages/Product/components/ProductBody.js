import { Link } from "react-router-dom";
import { useState } from "react";
import Sizes  from "./Sizes";

function ProductBody(props) {
    const [amount, setAmount] = useState(1);

    function add() {
        setAmount(prevAmount => prevAmount + 1);
    }

    function remove() {
        if (amount > 1) {
            setAmount(prevAmount => prevAmount - 1);
        }
    }

    const calculatedOldPrice = props.oldPrice * amount;
    const calculatedPrice = props.price * amount;

    return (
        <div id="container">
            <div id="img">
                <img src="https://via.placeholder.com/546x650" alt="" />
            </div>
            <div id="contents">
                <div id="rightColumn">
                    <section id="sectionUp">
                        <div id="title">
                            <h1 className="title">{props.name}</h1>
                        </div>
                        <div id="oldPrices">
                            {props.oldPrice > 0 ? (
                                <span className="oldPrice">R${calculatedOldPrice},00</span>
                            ) : (
                                <span />
                            )}
                        </div>
                        <div id="price">
                            <p className="price">R${calculatedPrice},00</p>
                        </div>
                    </section>
                    <section id="sectionMidlle">
                        <div id="sizes">
                            { props.sizes !== null ?(
                                <Sizes size={props.size} />
                            ) : (
                                <span />
                            )}
                        </div>
                        <div id="selects">
                            <div id="counter">
                                <button onClick={add} className="add">+</button>
                                <span className="amount"><p>{amount}</p></span>
                                <button onClick={remove} className="remove">-</button>
                            </div>
                            <div id="button">
                                <Link to="/" className="button">Comprar</Link>
                            </div>
                        </div>
                    </section>
                    <section id="sectionDown">
                        <div id="description">
                            <p className="description">{props.description}</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ProductBody;