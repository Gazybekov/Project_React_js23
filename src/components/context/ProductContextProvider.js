import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { API, API_CATEGORIES } from "../../helpers/const";
import { useNavigate } from "react-router-dom";
const productContext = createContext();
export const useProducts = () => useContext(productContext);
const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const INIT_STATE = {
    products: [],
    oneProduct: {},
    categories: [],
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
      case "GET_CATEGORIES":
        return { ...state, categories: action.payload };
    }
  };
  //! CREATE
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    navigate("/products");
  };
  //! GETPRODUCTS
  const getProducts = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  //! DELETE
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };
  //! GETONEPRODUCT
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };
  //! EDIT
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
    navigate("/products");
  };
  //! GETCATEGORIES
  const getcategories = async () => {
    const { data } = await axios(API_CATEGORIES);
    dispatch({
      type: "GET_CATEGORIES",
      payload: data,
    });
  };
  //! CREATECATEGORY
  const createCategory = async (newcategory) => {
    await axios.post(API_CATEGORIES, newcategory);
    getcategories();
  };
  //! FILTER
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${window.location.pathname}?${search}`;
    navigate(url);
  };
  const values = {
    addProduct,
    getProducts,
    products: state.products,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    getcategories,
    categories: state.categories,
    createCategory,
    fetchByParams,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
