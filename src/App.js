import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import StoreNavbar from "./components/StoreNavbar";


function App() {
  return (
    <BrowserRouter>
      <StoreNavbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
