import { useCheckQuery } from "./store/api/authApiSlice";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import SignupPage from "./views/auth/SignupPage";
import HomePage from "./views/home/HomePage";
import { useEffect, useMemo } from "react";
import LoginPage from "./views/auth/LoginPage";
import { Toaster } from "react-hot-toast";
import NotFoundPage from "./components/NotFoundPage";
import { useSelector } from "react-redux";
import { Loader } from "lucide-react";

export default function App() {
  const { theme } = useSelector((state) => state.theme);
  const { data: user, isLoading  } = useCheckQuery();
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect(() => {
    if (!isLoading) {
      switch (!user) {
        case "/login":
          navigate("/login");
          break;
        case "/signup":
          navigate("/signup");
      }
    }
  }, [user, isLoading, navigate]);
  const currentUser = useMemo(() => user, [user]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <main data-theme={theme} className="overflow-hidden">
      <Routes>
        <Route
          path="/"
          element={currentUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/signup"
          element={!currentUser ? <SignupPage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!currentUser ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </main>
  );
}
