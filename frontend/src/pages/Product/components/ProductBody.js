import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";
import Sizes from "./Sizes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function ProductBody(props) {
    const [amount, setAmount] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");
    const hasToken = Cookies.get("jwtToken") !== undefined; // Obtenha o token do armazenamento local ou de onde você o guarda.
    const history = useHistory();

    function add() {
        setAmount((prevAmount) => prevAmount + 1);
    }

    function remove() {
        if (amount > 1) {
            setAmount((prevAmount) => prevAmount - 1);
        }
    }

    const calculatedOldPrice = props.oldPrice * amount;
    const calculatedPrice = props.price * amount;

    const category = props.category;

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleBuyClick = () => {
        if (! hasToken) {
            alert("Você não está logado. Faça o login para comprar.");
            history.push("/SignIn");
            return;
        }

        if (category === "shirt" && !selectedSize) {
            alert("Selecione um tamanho antes de comprar.");
            return;
        }

        const productData = {
            id: props.id,
            amount,
        };
        if (selectedSize) {
            productData.size = selectedSize;
        }
        const existingProducts = JSON.parse(localStorage.getItem("selectedProducts")) || [];
        existingProducts.push(productData);
        localStorage.setItem("selectedProducts", JSON.stringify(existingProducts));
        alert(`Produto adicionado ao carrinho: ${amount} itens${selectedSize ? ` de tamanho ${selectedSize}` : ''}`);
    };

    return (
        <div id="container">
            <div id="left">
                <div>
                    <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="arrow"/></Link>
                </div>
                <div id="images">
                    <div id="principal">
                        <img src="https://via.placeholder.com/460x585" alt="" />
                    </div>
                    <div id="secundary">
                        <img src="https://via.placeholder.com/236x111" alt="" />
                        <img src="https://via.placeholder.com/236x111" alt="" />
                        <img src="https://via.placeholder.com/236x111" alt="" />
                        <img src="https://via.placeholder.com/236x111" alt="" />
                        <img src="https://via.placeholder.com/236x111" alt="" />
                    </div>
                </div>
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
                                null
                            )}
                        </div>
                        <div id="price">
                            <p className="price">R${calculatedPrice},00</p>
                        </div>
                    </section>
                    <section id="sectionMidlle">
                        <div id="sizes">
                            {category === "shirt" && props.sizes !== null ? (
                                <Sizes category={props.category} id={props.id} onSizeSelect={handleSizeSelect} />
                            ) : (
                                null
                            )}
                        </div>
                        <div id="selects">
                            <div id="selectContents">
                                <div id="counter">
                                    <button onClick={add} className="add">+</button>
                                    <span className="amount"><p>{amount}</p></span>
                                    <button onClick={remove} className="remove">-</button>
                                </div>
                                <div id="button">
                                    <Link to="#" className="button" onClick={handleBuyClick}>Comprar</Link>
                                </div>
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