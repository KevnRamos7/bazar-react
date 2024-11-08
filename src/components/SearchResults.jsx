import { useEffect } from "react";
import { useAppContext } from "../context/AppContext"
import { Link, useLocation } from "react-router-dom";

const SearchResults = () => {
    
    const { searchResults, setSearchResults } = useAppContext();
    const query = new URLSearchParams(useLocation().search).get("search");

    useEffect(() => {
        const fetchSearchResults = async () => {
            const response = await fetch(`http://bazarReact.somee.com/api/sales/items${query}`);
            const data = await response.json();
            setSearchResults(data);
        }
        fetchSearchResults();
    }, [query, setSearchResults]);
  
    return (
    <div>

        <h1>Resultados de la búsqueda</h1>
        <p>{searchResults.length} RESULTADOS ENCONTRADOS</p>

        {searchResults.map((item) => (
            <Link to={`/item/${item.id}`} key={item.id} >
            
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                    <p>{item.category}</p>
                    <img src={item.thumbnail} alt={item.title} />
                    <p>Puntuacion: {item.rating}</p>
                </div>

            </Link>
        ))}

    </div>
  )
}

export default SearchResults