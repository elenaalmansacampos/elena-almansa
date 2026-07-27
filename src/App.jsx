import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";


function App() {

  return (

    <Routes>

      <Route element={<MainLayout />}>

        <Route 
          path="/"
          element={<Home />}
        />


        <Route 
          path="/login"
          element={<Login />}
        />


        <Route 
          path="/about"
          element={<About />}
        />


        <Route 
          path="/contact"
          element={<Contact />}
        />


      </Route>

    </Routes>

  );

}


export default App;