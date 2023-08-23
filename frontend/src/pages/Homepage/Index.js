import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import { Navbar } from "../../components/Navbar/index";
import { Carousel } from "../../components/Carousel/index";
import Card from "../Catalog/Index";
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
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <Navbar>
                <div id="logo">
                    <h1>Distrito 4652</h1>
                </div>
                <div id="nav">
                    <ul>
                        <li className="dash">
                            <a href="/">Home</a>
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
                    <Link to="/SignIn" className="link">Entrar</Link>
                    <Link to="/SignUp" className="link">Cadastrar</Link>
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
                                            id={product.id}
                                            name={product.name}
                                            price={product.price}
                                            oldPrice={product.oldPrice}
                                            productPic={product.productPic}
                                            discount={product.disc}
                                            size={product.size}
                                            count={product.count}
                                        />
                                ))
                            }
                        </div>
                    ) : (
                        <p>Não há produtos</p>
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