import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Navbar from "./views/Navbar";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";
import useAuth from "./hooks/useAuth";
import SingleProduct from "./views/shopProduct/SingleProduct";
import useSocket from "./hooks/useSocket";
import AddProduct from "./views/shopProduct/AddProduct";
import Dashboard from "./views/dashboard/Dashboard";
import Checkout from "./views/checkout/Checkout";
import Blog from "./views/blog/Blog";

// Lazy load components for better performance
const SignupPage = lazy(() => import("./views/auth/SignupPage"));
const LoginPage = lazy(() => import("./views/auth/LoginPage"));
const HomePage = lazy(() => import("./views/home/HomePage"));
const NotFoundPage = lazy(() => import("./components/NotFoundPage"));
const Cart = lazy(() => import("./views/cart/Cart"));
const Shop = lazy(() => import("./views/shop/Shop"));
const Settings = lazy(() => import("./views/settings/Settings"));
const ProfilePage = lazy(() => import("./views/auth/ProfilePage"));
const UpdateInfo = lazy(() => import("./views/auth/UpdateInfo"));
const MakeOrder = lazy(() => import("./views/order/MakeOrder"));
const InputInfo = lazy(() => import("./views/order/InputInfo"));
const OrderSuccess = lazy(() => import("./views/order/OrderSuccess"));
export default function App() {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useAuth();
  const { connectionSocket, disconnectSocket } = useSocket();
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect(() => {
    if (user) {
      connectionSocket();
    }
    return () => {
      if (!user) {
        disconnectSocket();
      }
    };
  }, [connectionSocket, disconnectSocket, user]);
  return (
    <ErrorBoundary>
      <main
        data-theme={theme}
        className="min-h-screen w-full max-w-[100vw] overflow-x-hidden"
      >
        <Navbar />
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              {!user && <Route path="/signup" element={<SignupPage />} />}
              {!user && <Route path="/login" element={<LoginPage />} />}

              <Route path="/home" element={<HomePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:productId" element={<SingleProduct />} />
              <Route path="/settings" element={<Settings />} />
              {user && <Route path="/profile" element={<ProfilePage />} />}
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/update-info" element={<UpdateInfo />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/InputInfo" element={<InputInfo />} />
              <Route path="/makeOrder" element={<MakeOrder />} />
              <Route path="/orderSuccess" element={<OrderSuccess />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Toaster position="top-right" />
      </main>
    </ErrorBoundary>
  );
}
