import { useAppContext } from "../context/AppContext"

const Sales = () => {

    const  { purchases } = useAppContext();

  return (
    <div>

        <h1>Compras</h1>

        {purchases.length > 0 ? (
            purchases.map((p, index) => (
                <div>
                    <h3>{p.title}</h3>
                    <p>{p.price}</p>
                    <p>{p.category}</p>
                    <img src={p.thumbnail} alt={p.title} />
                    <p>Puntuacion: {p.rating}</p>
                </div>
            ))
        ) : (
            <p>No hay compras</p>
        )}

    </div>
  )
}

export default Sales