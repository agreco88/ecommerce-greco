import ItemListCointainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import React, { useState } from "react";
import CategoryContainer from "./components/CategoryContainer";
import { CartContextProvider } from "./CartContext";
import { NotificationContextProvider } from "./components/notifications/NotificationServices";
import Cart from "./components/Cart";

const App = () => {
  const [userName] = useState("Agustin");
  const [greeting] = useState("Welcome back");

  return (
    <BrowserRouter>
      <NotificationContextProvider>
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
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContextProvider>
      </NotificationContextProvider>
    </BrowserRouter>
  );
};

export default App;
