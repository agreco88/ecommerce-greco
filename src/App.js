import ItemListCointainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import React, { useState } from "react";
import CategoryContainer from "./components/CategoryContainer";
import { CartContextProvider } from "./CartContext";

const App = () => {
  const [userName, setUsername] = useState("Agustin");
  const [cartItemCount, setCartItemCount] = useState(4);
  const [greeting, setGreeting] = useState("Welcome back");

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar cartItemCount={cartItemCount} />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListCointainer
                userName={userName}
                greeting={greeting}
                cartItemCount={cartItemCount}
              />
            }
          />
          <Route path="/about" element={<h1>About</h1>} />
          <Route
            path="/category/:categoryId"
            element={
              <CategoryContainer
                userName={userName}
                greeting={greeting}
                cartItemCount={cartItemCount}
              />
            }
          />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
