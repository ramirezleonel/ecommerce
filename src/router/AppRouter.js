
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ShoppingCart from "../pages/shoppingCart";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carrito" element={<ShoppingCart />} />
        <Route path="invoices" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
