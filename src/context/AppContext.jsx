import { createContext, useContext, useState } from "react"

const AppContext = createContext();

export const AppProvider = ({children}) => {

        const [searchResults, setSearchResults] = useState([]);
        const [purchases, setPurchases] = useState([]);

        const addPurchase = (product) => {
            setPurchases(prevPurchases => {
                const existingProduct = prevPurchases.find(p => p.id === product.id);
                if (existingProduct) {
                    return prevPurchases.map(p =>
                        p.id === product.id ? { ...p, cantidad: p.cantidad + 1 } : p
                    );
                } else {
                    const { id, title, thumbnail, price } = product;
                    return [...prevPurchases, { id, title, thumbnail, price, cantidad: 1 }];
                }
            });
        }

        return (
            <AppContext.Provider value={{ searchResults, setSearchResults, purchases, addPurchase, setPurchases }}>
            {children}
            </AppContext.Provider>  
        );

}

export const useAppContext = () => useContext(AppContext);