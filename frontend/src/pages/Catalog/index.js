import React from "react";
import './index.css';
import { Cards } from "../../components/Cards";

export function Card() {
    return (
        <>
            <Cards>
                <div id="cardImg"><
                    img src="http://via.placeholder.com/240x280" alt="" className="carImg" />
                </div>
                <div id="cardText">
                    <div id="price">
                        <span className="oldPrice">R$60,00</span>
                        <p className="price">R$ 45,00</p>
                        <p className="name">Nome do produto</p>
                    </div>
                    <div id="name">
                    </div>
                    <div id="cardButton">
                        <button className="cardButton">Comprar</button>
                    </div>
                </div>
            </Cards>
        </>
    );
}