import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductBody from "./components/ProductBody";
import { Container } from "../../components/Product/Index";

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8800/products/${id}`)
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                return resp.json();
            })
            .then((data) => {
                setProduct(data);
            })
            .catch(err => {
                setError(err);
                console.log(err);
            });
    }, [id]);

    return (
        <Container>
            {error ? (
                <p>Erro ao carregar os dados do produto.</p>
            ) : product ? (
                <>
                    <ProductBody
                        id={product.id}
                        name={product.name}
                        oldPrice={product.oldPrice}
                        price={product.price}
                        description={product.description}
                        category={product.category}
                        productPic={product.productPic}
                    />
                </>
            ) : (
                <p>Carregando...</p>
            )}
        </Container>
    );
}

export default Product;