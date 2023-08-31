import React, { useEffect, useState } from "react";
import axios from "axios";
import { Size } from "../../../components/Sizes/Index";
import { Alert } from "../../../components/Extra/Alert/Index";

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
        props.onSizeSelect(size);
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
                <Alert>
                    <p className="smallSize">Não achamos nenhum tamanho no momento</p>
                </Alert>
            )}
        </div>
    );
}

export default Sizes;