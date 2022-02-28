import ItemListCointainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import React, { useState } from "react";
import CategoryContainer from "./components/CategoryContainer";
import { CartContextProvider } from "./CartContext";

const App = () => {
  const [userName] = useState("Agustin");
  const [greeting] = useState("Welcome back");

  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListCointainer userName={userName} greeting={greeting} />
            }
          />
          <Route path="/about" element={<h1>About</h1>} />
          <Route
            path="/category/:categoryId"
            element={
              <CategoryContainer userName={userName} greeting={greeting} />
            }
          />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
