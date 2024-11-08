import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import Home from "./components/Home"
import SearchResults from "./components/SearchResults"
import ProductDetail from "./components/ProductDetail"
import Sales from "./components/Sales"

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<SearchResults />} />
          <Route path="/item/:id" element={<ProductDetail />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </Router>
    </AppProvider>
  );
};
export default App