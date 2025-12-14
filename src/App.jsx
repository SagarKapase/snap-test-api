import DashboardLayoutBasic from "./Comps/DashboardLayoutBasic.jsx";
import MainUI from "./Comps/LandingPage/MainUI.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SnapTestLanding from "./Comps/LandingPage/SnapTestLanding.jsx";

function App() {
  return (
    <>
      {/* <SnapTestLanding /> */}
      {/* <DashboardLayoutBasic /> */}
      {/* <MainUI /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SnapTestLanding />} />
          <Route path="/dashboard" element={<DashboardLayoutBasic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
