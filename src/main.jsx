import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import {Step1, Step2, Step3, FinalStep} from "./assets/pages/index"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Step1 />} />
      <Route path="/step2" element={<Step2 />} />
      <Route path="/step2/step3" element={<Step3 />} />
      <Route path="/step2/step3/finalstep" element={<FinalStep />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
