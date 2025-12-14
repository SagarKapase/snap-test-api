import DashboardLayoutBasic from "./Comps/DashboardLayoutBasic.jsx";
import MainUI from "./Comps/LandingPage/MainUI.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SnapTestLanding from "./Comps/LandingPage/SnapTestLanding.jsx";
import SnapTestDashboard from "./NewUI/SnaptestDashboard.jsx";

function App() {
  return (
    <>
      {/* <SnapTestLanding /> */}
      {/* <DashboardLayoutBasic /> */}
      {/* <MainUI /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SnapTestLanding />} />
          <Route path="/dashboard" element={<SnapTestDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
