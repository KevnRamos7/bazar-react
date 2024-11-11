// import { useAppContext } from "../context/AppContext"

import { useEffect, useState } from "react";

const Sales = () => {

    const [sales, setSales] = useState([]);

    const fetchSales = async () => {
        try {
            const response = await fetch("//bazarReact.somee.com/api/sales/sales");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const sortedSales = data.sort((a, b) => b.idSales - a.idSales);
            setSales(sortedSales);
        } catch (error) {
            console.error('Failed to fetch sales:', error);
        }
    }

    useEffect(() => {
        fetchSales();
    }
    , []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Ventas</h1>

      {sales.map((sale) => {
        // Formato de fecha
        const formattedDate = new Date(sale.fechaVenta).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        return (
          <div key={sale.idSales} className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="card-title text-primary">{formattedDate}</h3>
              <p className="card-text">Total: ${sale.total}</p>
              <p className="card-text">Artículos: {sale.items.length}</p>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Sales