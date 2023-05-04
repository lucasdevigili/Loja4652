import React from "react";
import './index.css';
import { Navbar } from "../../components/Navbar/index";
import { Carousel } from "../../components/Carousel/index";
//import { Cards } from "../../components/Cards";
//import { Contact} from "../../components/Contact";

export function Homepage(props) {
    return (
        <>
            <Navbar>
                    <div id="logo">
                        <h1>Distrito 4652</h1>
                    </div>
                    <div id="nav">
                        <ul>
                            <li className="dash">Home</li>
                            <li className="dash">Catálogo</li>
                            <li>Contato</li>
                        </ul>
                    </div>
                    <div id="buttons">
                        <button>Entrar</button>
                        <button>Cadastrar</button>
                    </div>
            </Navbar>
            <Carousel />
        </>
    );
}