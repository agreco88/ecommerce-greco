import ItemListCointainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { useState } from "react";

const App = () => {
  const [userName, setUsername] = useState("Agustin");
  const [cartItemCount, setCartItemCount] = useState(4);
  const [greeting, setGreeting] = useState("Welcome back");
  return (
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
        <Route path="/category/:categoryId" element={<ItemDetailContainer />} />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
