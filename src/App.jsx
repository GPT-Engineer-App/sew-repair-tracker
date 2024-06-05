import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CheckIn from "./pages/CheckIn.jsx";
import TechDashboard from "./pages/TechDashboard.jsx";
import Navigation from "./components/Navigation.jsx";
import AssignMachine from "./pages/AssignMachine.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/tech-dashboard" element={<TechDashboard />} />
        <Route path="/assign-machine" element={<AssignMachine />} />
      </Routes>
    </Router>
  );
}

export default App;
