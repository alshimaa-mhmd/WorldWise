import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pricing from './pages/Pricing'
import PageNotFound from './pages/PageNotFound'
import Product from "./pages/Product"
import Homepage from "./pages/Homepage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="product" element={<Product />}/>
        <Route path="pricing" element={<Pricing />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
