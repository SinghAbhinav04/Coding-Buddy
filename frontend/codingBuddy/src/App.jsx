import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Homepage from "./pages/Homepage.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";
import Course from "./pages/Course.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/Signup.jsx";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        {/* Navbar stays at the top */}
        <Navbar />
        {/* Main content grows and pushes footer to bottom */}
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/course" element={<Course />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth/login" element={<Login/>}/>
            <Route path="/auth/signup" element={<Signup/>}/>
          </Routes>
        </div>
        {/* Footer sticks to the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
