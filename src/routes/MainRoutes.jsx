import React from "react";
import HomePage from "../pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "../components/products/AddProduct";
import EditProduct from "../components/products/EditProduct";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import AddCategory from "../components/products/AddCategory";
import Cart from "../components/cart/Cart";
import AuthPage from "../pages/AuthPage";
import ProductPage from "../pages/ProductPage";
import AdminPage from "../pages/AdminPage";
import { useAuth } from "../components/context/AuthContextProvider";
import { ADMIN } from "../helpers/const";
import NotFoundPage from "../pages/NotFoundPage";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/products", element: <ProductPage /> },
    { id: 3, link: "/about", element: <AboutPage /> },
    { id: 4, link: "/contact", element: <ContactPage /> },
    { id: 5, link: "/cart", element: <Cart /> },
    { id: 6, link: "/auth", element: <AuthPage /> },
    { id: 7, link: "*", element: <NotFoundPage /> },
  ];
  const PRIVATE_ROUTES = [
    { id: 8, link: "/edit/:id", element: <EditProduct /> },
    { id: 9, link: "/admin", element: <AdminPage /> },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route key={elem.id} path={elem.link} element={elem.element} />
        ))}
        {user
          ? PRIVATE_ROUTES.map((elem) => (
              <Route
                key={elem.id}
                path={elem.link}
                element={
                  user.email === ADMIN ? elem.element : <Navigate to="*" />
                }
              />
            ))
          : null}
      </Routes>
    </div>
  );
};

export default MainRoutes;
