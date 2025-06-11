import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainContext from "./context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MainContext>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </MainContext>
);
