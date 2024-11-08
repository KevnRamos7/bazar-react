import { createContext, useContext, useState } from "react"

const AppContext = createContext();

export const AppProvider = ({children}) => {

        const [searchResults, setSearchResults] = useState([]);
        const [puchases, setPurchases] = useState([]);

        const addPucharse = (product) => {
            setPurchases([...purchases, product]);
        }

        return (
            <AppContext.Provider value={{ searchResults, setSearchResults, puchases, addPucharse }}>
                {children}
            </AppContext.Provider>  
        );

}

export const useAppContext = () => useContext(AppContext);