
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expenses" element={<Home />} />
        <Route path="invoices" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
