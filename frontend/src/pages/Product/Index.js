import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8800/products/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setProduct(data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return (
        <>
            {product ? (
                <div>
                    <h2>{product.name}</h2>
                    <p>Preço: R${product.price}</p>
                    {product.oldPrice > 0 && (
                        <p>Preço Antigo: R${product.oldPrice}</p>
                    )}
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </>
    );
}

export default Product