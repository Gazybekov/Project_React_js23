import React from "react";
import HomePage from "../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/products/AddProduct";
import EditProduct from "../components/products/EditProduct";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import AddCategory from "../components/products/AddCategory";
import Cart from "../components/cart/Cart";
import AuthPage from "../pages/AuthPage";
import ProductPage from "../pages/ProductPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/addProduct", element: <AddProduct /> },
    { id: 3, link: "/edit/:id", element: <EditProduct /> },
    { id: 4, link: "/products", element: <ProductPage /> },
    { id: 5, link: "/about", element: <AboutPage /> },
    { id: 6, link: "/contact", element: <ContactPage /> },
    { id: 7, link: "/addCategory", element: <AddCategory /> },
    { id: 8, link: "/cart", element: <Cart /> },
    { id: 9, link: "/auth", element: <AuthPage /> },
  ];

  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route key={elem.id} path={elem.link} element={elem.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
