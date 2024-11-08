import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useAppContext } from "../context/AppContext";

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addPurchase } = useAppContext();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`http://bazarReact.somee.com/api/sales/items/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        fetchProduct();
    }, [id]);

  return (
    <div>

        {product ? (
            <div>
                <h1>{product.title}</h1>
                <p>{product.price}</p>
                <p>{product.category}</p>
                <img src={product.thumbnail} alt={product.title} />
                <p>Puntuacion: {product.rating}</p>
                <button onClick={() => addPurchase(product)}>Comprar</button>
            </div>
        ) : (
            <p>Cargando...</p>
        )}

    </div>
  )
}

export default ProductDetail