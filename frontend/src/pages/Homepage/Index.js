import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './index.css';
import { Navbar } from "../../components/Navbar/Index";
import { Carousel } from "../../components/Carousel/Index";
import Card from "../Catalog/Index";
import { Contact } from "../../components/Contact/Index";
import axios from "axios";

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
                <div id="cardContainer">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <Card
                                key={product.id} // Add a unique key prop
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                oldPrice={product.oldPrice}
                                productPic={product.productPic}
                                discount={product.disc} // Should this be discount={product.discount}?
                                size={product.size}
                                count={product.count} // Should this be amount={product.amount}?
                            />
                        ))
                    ) : (
                        <span>There are no products available.</span>
                    )}
                </div>
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