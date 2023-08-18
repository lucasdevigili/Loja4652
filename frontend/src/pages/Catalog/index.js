import React from "react";
import './index.css';
import { Cards } from "../../components/Cards";
// import axios from "axios";

function Card({ name, price, oldPrice}) {

   
    return (
        <>
            <Cards>
                <div id="cardImg"><
                    img src="http://via.placeholder.com/240x280" alt="" className="carImg" />
                </div>
                <div id="cardText">
                    <div id="price">
                        {
                            oldPrice > 0 ? (
                                <span className="oldPrice">R${oldPrice}</span>
                            ) : (
                                <span />
                            )
                        }
                        <p className="price">R${price}</p>
                        <p className="name">{name}</p>
                    </div>
                    <div id="cardButton">
                        <button className="cardButton">Comprar</button>
                    </div>
                </div>
            </Cards>
        </>
    );    
}
export default Card