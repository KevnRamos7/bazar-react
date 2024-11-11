import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useAppContext } from "../context/AppContext";

const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addPurchase } = useAppContext();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://bazarReact.somee.com/api/sales/items/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        fetchProduct();
    }, [id]);

return (
    <div className="container my-5">
      {product ? (
        <div className="row">
          <div className="col-md-6 mb-4">
            {/* Imagen del producto */}
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-6">
            {/* Detalles del producto */}
            <h1 className="display-4 text-primary">{product.title}</h1>
            <p className="h5 text-muted">{product.category}</p>
            <p className="lead text-success">${product.price}</p>
            <div className="mb-3">
              <strong>Puntuación:</strong>
              <span className="badge bg-warning text-dark ml-2">
                {product.rating}
              </span>
            </div>
            {/* Botón de compra */}
            <button
              onClick={() => addPurchase(product)}
              className="btn btn-lg btn-success mt-3"
            >
              Comprar
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-primary">Cargando...</p>
      )}
    </div>
)
}

export default ProductDetail