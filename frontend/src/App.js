import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import AdminDashboard from "./pages/AdminDashboard";
import OrderHistory from "./pages/OrderHistory";
import VendorDashboard from "./pages/VendorDashboard";
import ApplyCoupon from "./pages/ApplyCoupon";
import DarkModeToggle from "./components/DarkModeToggle";
import ChatSupport from "./components/ChatSupport";
import Carousel from "./components/Carousel";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import { ChatProvider } from "./context/ChatContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <ChatProvider>
            <Router>
              <Navbar />
              <DarkModeToggle />
              <Carousel />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/order-history" element={<OrderHistory />} />
                <Route path="/vendor" element={<VendorDashboard />} />
                <Route path="/apply-coupon" element={<ApplyCoupon />} />
              </Routes>
              <ChatSupport />
              <Footer />
            </Router>
          </ChatProvider>
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;