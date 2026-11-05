import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Projects from "./pages/projects/Projects";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
