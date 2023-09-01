import React, { useEffect, useState } from "react";
import { CartContainer } from "../../components/Cart/Index";
import Cards from "./Components/Cards";
import BuyCards from "./Components/BuyCard";

function Cart() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const getSelectedProductsFromLocalStorage = () => {
    const localStorageItems = JSON.parse(localStorage.getItem("selectedProducts")) || [];
    setSelectedProducts(localStorageItems);
  };

  const fetchProductDetails = async () => {
    const productDetails = await Promise.all(
      selectedProducts.map(async (product) => {
        const response = await fetch(`http://localhost:8800/products/${product.id}`);
        const data = await response.json();
        return {
          id: product.id,
          name: data.name,
          price: data.price,
        };
      })
    );
    setProductDetails(productDetails);
  };

  useEffect(() => {
    getSelectedProductsFromLocalStorage();
  }, []);

  useEffect(() => {
    if (selectedProducts.length > 0) {
      fetchProductDetails();
    }
  }, [selectedProducts]);

  const nextPage = () => {
    if (currentPage < getTotalPages()) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const getTotalPages = () => {
    return Math.ceil(productDetails.length / itemsPerPage);
  };

  const renderPageButtons = () => {
    const totalPages = getTotalPages();
    const pageButtons = [];

    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? "active" : ""}
        >
          {i}
        </button>
      );
    }

    return pageButtons;
  };

  const productsToDisplay = productDetails.slice(startIndex, endIndex);

  return (
    <CartContainer>
      <div id="cartContents">
        <div id="header">
          <div id="back">
            <a href="/">voltar</a>
          </div>
          <div id="title">
            <h1 className="title">CARRINHO DE COMPRAS</h1>
          </div>
        </div>
        <div id="components">
          <div id="cards">
            <Cards products={productsToDisplay} />
          </div>
          <div id="buyCard">
            <BuyCards />
          </div>
        </div>
        <div id="pagination" className="pagination">
          {currentPage > 1}
          {renderPageButtons()}
          {currentPage < getTotalPages()}
        </div>
      </div>
    </CartContainer>
  );
}

export default Cart;
