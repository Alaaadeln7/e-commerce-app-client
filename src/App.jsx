import { Routes, Route, } from "react-router-dom";
import SignupPage from "./views/auth/SignupPage";
import HomePage from "./views/home/HomePage";
import { useEffect } from "react";
import LoginPage from "./views/auth/LoginPage";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "./components/NotFoundPage";
import { useSelector } from "react-redux";
import Navbar from "./views/Navbar";
import Settings from "./views/settings/Settings";
import Cart from "./views/cart/Cart";

export default function App() {
  const { theme } = useSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <main data-theme={theme} className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage /> }
        />
        <Route
          path="/signup"
          element={ <SignupPage />}
        />
        <Route
          path="/login"
          element={ <LoginPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster />
    </main>
  );
}
