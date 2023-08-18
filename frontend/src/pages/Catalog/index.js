import React from "react";
import './index.css';
import { Cards } from "../../components/Cards";
// import axios from "axios";

const Card = ({ products }) =>{
    return (
        <>
            <Cards>
                <div id="cardImg"><
                    img src="http://via.placeholder.com/240x280" alt="" className="carImg" />
                </div>
                <div id="cardText">
                    <div id="price">
                        {products && products.map((item, i) => (
                            <ul key={i} id="ulCard">
                                <li className="liCard">
                                    <span className="oldPrice">{item.oldPrice}</span>
                                </li>
                                <li className="liCard">
                                    <p className="price">{item.price}</p>
                                </li>
                                <li className="liCard">
                                    <p className="name">{item.name}</p>
                                </li>
                            </ul>
                        ))}
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

export default Card;