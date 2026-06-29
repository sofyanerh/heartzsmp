import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Rules from "../pages/Rules";
import FAQ from "../pages/FAQ";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          
          {/* HOME */}
          <Route index element={<Home />} />

          {/* MAIN SECTIONS */}
          <Route path="rules" element={<Rules />} />
          <Route path="faq" element={<FAQ />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}