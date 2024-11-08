import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        navigate(`/items?search=${query}`)
    }

  return (
    <div>

        <h1>B Online</h1>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar ..." />
        <button onClick={handleSearch}>Buscar</button>

    </div>
  )
}

export default Home