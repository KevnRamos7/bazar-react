import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext"
import { Link, useLocation } from "react-router-dom";

const SearchResults = () => {
    
    const { searchResults, setSearchResults } = useAppContext();
    const query = new URLSearchParams(useLocation().search).get("search");

    useEffect(() => {
        const fetchSearchResults = async () => {
            let search = query === "" ? "." : query;
            const response = await fetch(`//bazarReact.somee.com/api/sales/items${search}`);
            const data = await response.json();
            setSearchResults(data);
        }
        fetchSearchResults();
    }, [query, setSearchResults]);

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProduct = searchResults && searchResults.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

  
    return (
        <div className="container my-5">
        <h1 className="text-center mb-4">Resultados de la búsqueda</h1>
        <p className="text-center" style={{color:"white"}}>{filteredProduct.length} RESULTADOS ENCONTRADOS</p>
  
        {/* Barra de búsqueda */}
        <div className="mb-4 d-flex justify-content-center">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Buscar producto..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
  
        {/* Mostrar los productos filtrados */}
        <div className="row">
          {filteredProduct.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <Link to={`/item/${item.id}`} className="text-decoration-none">
                <div className="card shadow-sm">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.price}</p>
                    <p className="card-text text-muted">{item.category}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-warning text-dark">
                        Puntuación: {item.rating}
                      </span>
                      <button className="btn btn-sm btn-primary">Ver detalles</button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
  
        {filteredProduct.length === 0 && (
          <p className="text-center text-secondary">No se encontraron productos.</p>
        )}
      </div>
  )
}

export default SearchResults