import React, { useEffect, useState } from "react";
import { CartContainer } from "../../components/Cart/Index";
import Cards from "./Components/Cards";
import BuyCards from "./Components/BuyCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


function Cart() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const getSelectedProductsFromLocalStorage = () => {
    const localStorageItems = JSON.parse(localStorage.getItem("selectedProducts")) || [];
    setSelectedProducts(localStorageItems);
    // Atualizar os detalhes dos produtos com amount e size
    const updatedProductDetails = productDetails.map((product) => {
      const localStorageItem = localStorageItems.find((item) => item.id === product.id);
      if (localStorageItem) {
        return {
          ...product,
          amount: localStorageItem.amount,
          size: localStorageItem.size, // Adicione esta linha para definir a propriedade 'size'
        };
      }
      return product;
    });
    setProductDetails(updatedProductDetails);
  };
  const fetchProductDetails = async () => {
    const productDetails = await Promise.all(
      selectedProducts.map(async (product) => {
        try {
          const response = await fetch(`http://localhost:8800/products/${product.id}`);
          if (!response.ok) {
            throw new Error('Erro ao buscar detalhes do produto');
          }
          const data = await response.json();
          const updatedProduct = {
            id: product.id,
            name: data.name,
            price: data.price,
            amount: product.amount,
            size: product.size // Certifique-se de que amount seja definido aqui
          };
          return updatedProduct;
        } catch (error) {
          console.error(error);
          return null;
        }
      })
    );
    setProductDetails(productDetails.filter((detail) => detail !== null));
  };

  useEffect(() => {
    getSelectedProductsFromLocalStorage();
  }, []);

  useEffect(() => {
    if (selectedProducts.length > 0) {
      fetchProductDetails();
    }
  }, [selectedProducts]);

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
            <a href="/"><FontAwesomeIcon icon={faArrowLeft} className="arrow"/></a>
          </div>
          <div id="title">
            <h1 className="title">CARRINHO DE COMPRAS</h1>
          </div>
        </div>
        <div id="components">
          <div id="cards">
            <Cards
              products={productsToDisplay}
            />
          </div>
          <div id="buyCard">
            <BuyCards />
          </div>
        </div>
        <div className="pagination">
          {currentPage > 1}
          {renderPageButtons()}
          {currentPage < getTotalPages()}
        </div>
      </div>
    </CartContainer>
  );
}

export default Cart