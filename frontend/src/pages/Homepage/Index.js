import React from "react";
import './index.css';
import { Navbar } from "../../components/Navbar/index";
import { Carousel } from "../../components/Carousel/index";
import Card from "../Catalog/index";
import { Contact } from "../../components/Contact/index";
import axios from "axios";
import { useEffect, useState } from "react";

function Homepage() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const res = await axios.get("http://localhost:8800/products");
            setProducts(res.data);
        } catch (error) {
            console.log(error);
            //TODO: console
        }
    };

    useEffect(() => {
        getProducts();
    }, [setProducts]);

    return (
        <>
            <Navbar>
                <div id="logo">
                    <h1>Distrito 4652</h1>
                </div>
                <div id="nav">
                    <ul>
                        <li className="dash">
                            <a>Home</a>
                        </li>
                        <li className="dash">
                            <a href="#catalog">Catálogo</a>
                        </li>
                        <li>
                            <a href="#contact">Contato</a>
                        </li>
                    </ul>
                </div>
                <div id="buttons">
                    <button>Entrar</button>
                    <button>Cadastrar</button>
                </div>
            </Navbar>
            <Carousel>
                <div id="carrousel">
                    <div id="carrouselImg">
                        <img src="http://via.placeholder.com/1300x460" alt="" className="imgCarrousel" />
                    </div>
                </div>
            </Carousel>
            <section id="catalog">
                {
                    products.length > 0 ? (
                        <div id="cardContainer">
                            {
                                products.map((product) => (
                                    <Card
                                        key={product.id}
                                        name={product.name}
                                        oldPrice={product.oldPrice}
                                        price={product.price}
                                    />
                                ))
                            }
                        </div>
                    ) : (
                        <p>Não ha produtos</p>
                    )
                }
            </section>
            <Contact id="contact">
                <div id="contactContainer">
                    <div id="contactTitle">
                        <h3>Informações de contato:</h3>
                    </div>
                    <div id="text">
                        <div id="p">
                            <p id="email">E-mail: <span className="email">distrito4652@gmail.com</span></p>
                            <p id="instagram">Instagram: <span className="instagram">@interact4652</span></p>
                            <p id="cellphone">Telefone: <span className="cellphone">(47)9262-8160</span></p>
                        </div>
                    </div>
                </div>
            </Contact>
        </>
    );
}

export default Homepage;