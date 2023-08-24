import React from "react";
import './index.css';
import { Cards } from "../../components/Cards/index";
import {Link} from "react-router-dom"

function Card({ name, price, oldPrice, id}) {  
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
                                <span className="oldPrice">R${oldPrice},00</span>
                            ) : (
                                <span />
                            )
                        }
                        <p className="price">R${price},00</p>
                        <p className="name">{name}</p>
                    </div>
                    <div id="cardButton" >
                        <Link className="cardButton" to={"/product/" + id}>Comprar</Link>
                    </div>
                </div>
            </Cards>
        </>
    );    
}
export default Card