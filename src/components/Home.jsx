import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        navigate(`/items?search=${query}`)
    }

  return (
    <div className="search-container">
      <h1 className="title">B Online</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar ..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Buscar
      </button>
    </div>
  )
}

export default Home