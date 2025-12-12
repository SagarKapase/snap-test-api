import DashboardLayoutBasic from "./Comps/DashboardLayoutBasic.jsx";
import MainUI from "./Comps/LandingPage/MainUI.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <DashboardLayoutBasic />
      {/* <MainUI /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainUI />} />
          <Route path="/dashboard" element={<DashboardLayoutBasic />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
