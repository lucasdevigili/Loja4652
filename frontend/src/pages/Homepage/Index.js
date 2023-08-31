import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './index.css';
import { Navbar } from "../../components/Navbar/index";
import { Carousel } from "../../components/Carousel/index";
import Card from "../Catalog/index";
import { Contact } from "../../components/Contact/Index";
import axios from "axios";
import { Alert } from "../../components/Extra/Alert/Index";
import robert from "../../img/Robert.png";  

function Homepage() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 8; // Number of products to display per page

    const getProducts = async () => {
        try {
            const res = await axios.get("http://localhost:8800/products");
            const eventoProducts = res.data.filter(product => product.category === "evento");
            const otherProducts = res.data.filter(product => product.category !== "evento");
            setProducts([...eventoProducts, ...otherProducts]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const startIndex = (currentPage - 1) * productsPerPage;
    const displayedProducts = products.slice(startIndex, startIndex + productsPerPage);

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
                        {displayedProducts.length > 0 ? (
                            displayedProducts.map((product) => (
                                <Card
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    oldPrice={product.oldPrice}
                                    productPic={product.productPic}
                                    size={product.size}
                                />
                            ))
                        ) : (
                            <Alert>
                                <img name="robert" src={robert} alt="Robert" />
                                <p  className="bigSize">Parece que não achamos nenhum produto no momento...</p>
                            </Alert>
                        )}
                    </div>
            </section>
            <div id="buttons">
                {totalPages > 1 && (
                    <div className="pagination">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}
                                className={currentPage === index + 1 ? "active" : ""}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                )}
            </div>
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