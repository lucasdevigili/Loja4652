import React, { useEffect, useState } from "react";
import axios from "axios";
import { Size } from "../../../components/Sizes/Index";

function Sizes(props) {
    const [sizes, setSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8800/products/shirts/${props.id}`)
            .then(response => {
                const productSizes = response.data;
                setSizes(productSizes);
            })
            .catch(error => {
                console.error("Erro ao buscar os tamanhos do produto:", error);
            });
    }, [props.id]);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
        props.onSizeSelect(size); // Passa o tamanho selecionado para o componente pai
    };

    return (
        <div id="size">
            {sizes && sizes.length > 0 ? (
                sizes.map((sizeObj, index) => (
                    <Size key={index}>
                        <button
                            className={`size ${selectedSize === sizeObj.size ? "selected" : ""}`}
                            onClick={() => handleSizeClick(sizeObj.size)}
                        >
                            <p>{sizeObj.size}</p>
                        </button>
                    </Size>
                ))
            ) : (
                <p>No sizes available.</p>
            )}
        </div>
    );
}

export default Sizes;