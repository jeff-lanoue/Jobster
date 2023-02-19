import React from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";

const contianer = document.getElementById("root");
const root = createRoot(contianer);
root.render(<App tab="home" />);
