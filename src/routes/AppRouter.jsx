import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Rules from "../pages/Rules";
import FAQ from "../pages/FAQ";
import FarmsMods from "../pages/FarmsMods";
import StaffApply from "../pages/StaffApply";
import HowToJoin from "../pages/HowToJoin";

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
          <Route path="farms-mods" element={<FarmsMods />} />
          <Route path="staff-apply" element={<StaffApply />} />
          <Route path="how-to-join" element={<HowToJoin />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}