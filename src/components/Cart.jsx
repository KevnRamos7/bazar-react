import { useAppContext } from "../context/AppContext"

const Cart = () => {
    
  const  { purchases, setPurchases } = useAppContext();

    const saveSales = async () => {
      let response
        try {

            const salesData = purchases.map(p => ({
              idProduct: p.id,
              quantity: p.cantidad,
              price: p.price,
              discount: 0,
              total: p.price * p.cantidad
            }));
            const salesPayload = JSON.stringify(salesData);

            response = await fetch("bazarReact.somee.com/api/sales/addSale", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: salesPayload,
            });
            console.log(salesPayload);
            if (response != null) {
              alert("Venta realizada");
              setPurchases([]);
            } else {
          alert("Error al realizar la venta: ");
          console.log(response);
            }
        } catch (error) {
            console.log(error);
            alert("Error al realizar la venta: " + error);
        }
        if (response.ok) {
            console.log(response);
            // alert("Venta realizada");
        } else {
            console.log(response);
            alert("Error al realizar la venta" + response);
        }   
    }

  const totalAmount = purchases.reduce((acc, p) => acc + p.price * p.cantidad, 0);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Carrito de Compras</h1>

      {/* Si hay productos en el carrito */}
      {purchases.length > 0 ? (
        <>
          <div className="row">
            {purchases.map((p) => (
              <div key={p.id} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="card-img-top img-fluid"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text text-muted">{p.category}</p>
                    <p className="card-text text-success">${p.price}</p>
                    <p className="card-text">
                      <strong>Cantidad:</strong> {p.cantidad}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <button className="btn btn-sm btn-danger">Eliminar</button>
                      <p className="text-muted">
                        Total: ${p.price * p.cantidad}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón de compra, visible solo si hay productos en el carrito */}
          <div className="text-center mt-4">
            <button
              onClick={saveSales}
              className="btn btn-lg btn-success"
            >
              Comprar Todo
            </button>
          </div>

          <h5>Total: ${totalAmount}</h5>  

        </>
      ) : (
        <p className="text-center text-secondary">No hay compras en el carrito.</p>
      )}
    </div>
  )
}

export default Cart