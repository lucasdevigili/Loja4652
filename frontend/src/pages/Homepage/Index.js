import React from "react";
import './index.css';
import { Navbar } from "../../components/Navbar/index";
import { Carousel } from "../../components/Carousel/index";
import { Card } from "../Catalog/index";
import { Contact } from "../../components/Contact/Index";

const LIMIT = 12;

export function Homepage() {
    return (
        <>
            <Navbar>
                <div id="logo">
                    <h1>Distrito 4652</h1>
                </div>
                <div id="nav">
                    <ul>
                        <li className="dash">
                            <button>Home</button></li>
                        <li className="dash"><button>Catálogo</button></li>
                        <li><button>Contato</button></li>
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
                <div id="cardContainer">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
            <Contact>
                <div id="contactContainer">
                    <div id="contactTitle">
                        <h3>Informações de contato:</h3>
                    </div>
                    <div id="text">
                        <div id="p">
                            <p id="email">E-mail:</p>
                            <p id="instagram">Instagram:</p>
                            <p id="cellphone">Telefone:</p>
                        </div>
                        <div id="span">
                            <span className="email">distrito4652@gmail.com</span>
                            <span className="instagram">@interact4652</span>
                            <span className="cellphone">(47)9262-8160</span>
                        </div>
                    </div>
                </div>
            </Contact>
        </>
    );
}