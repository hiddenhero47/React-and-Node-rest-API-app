import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardGoals from "./pages/DashboardGoals";
import DashboardUsers from "./pages/DashboardUsers";
import DashboardUserGoals from "./pages/DashboardUserGoals";
import DashboardContent from "./pages/DashboardContent";
import Header from "./components/layout/headers/header";
import Footer from "./components/layout/footers/footer";
import ScrollToTop from "./components/layout/wrappers/ScrollToTop";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <div className="containerBody">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/goals" element={<DashboardGoals />} />
              <Route path="/dashboard/users" element={<DashboardUsers />} />
              <Route
                path="/dashboard/users/goals"
                element={<DashboardUserGoals />}
              />
              <Route path="/dashboard/content" element={<DashboardContent />} />
            </Routes>
            <Footer />
          </div>
        </Router>
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;
