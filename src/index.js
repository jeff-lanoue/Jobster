import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

const contianer = document.getElementById("root");
const root = createRoot(contianer);

root.render(
    <Provider store={store}>
        <App tab="home" />;
    </Provider>
);
