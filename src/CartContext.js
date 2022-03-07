import { createContext, useState } from "react";

// CART ITEM EXAMPLE (TO ADD, DELETE)
// {
//   id: 2,
//   name: "Samsung S21+",
//   price: 800,
//   category: "celular",
//   img: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
//   imgAlt: "Silver Samsung S21+ with box",
//   stock: 16,
//   reviews: { average: 4, totalCount: 1291 },
//   description:
//     "Super high-resolution camera and 8K video. Galaxy's fastest processor yet. All-day intelligent battery. A striking new design. Everyday just got epic.",
// },

const Context = createContext([[], () => {}]);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  //----------------------------------
  const [shippingFees] = useState(Math.floor(Math.random() * 25));
  const [tax] = useState(10);
  //----------------------------------

  const [cartTotal, setCartTotal] = useState(0);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      let updatedCart = cart;
      let totalCost = cartTotal;
      let updatedItemCount = 0;

      //if item exists: Search for it by id and update its quantity attribute.
      updatedCart.map((element) => {
        if (element.id === item.id) {
          //Add the quantity from the existing item with the prop quantity
          element.quantity = element.quantity + quantity;
          updatedItemCount = element.quantity;
          totalCost = element.price * quantity;
        }
      });

      setCartTotal(cartTotal + totalCost);
      setItemCount(updatedItemCount);
      setCart(updatedCart);
    } else {
      //If item deos not exist: Add it with a quantity attribute.
      let updatedItem = {
        ...item,
        quantity,
      };
      let updatedCart = cart;
      let updatedCount = itemCount + quantity;
      let totalCost = cartTotal + quantity * updatedItem.price;
      console.log("Total cost:", totalCost);
      setCartTotal(totalCost);
      updatedCart.push(updatedItem);
      setItemCount(updatedCount);
      setCart(updatedCart);
    }
  };

  const removeItem = (itemToRemove) => {
    //TODO QUANTITY UPDATE
    let updatedCount = 0;
    let updatedTotal = 0;

    console.log("Item to remove: ", itemToRemove);

    const updatedCart = cart.filter((item) => {
      if (item.id === itemToRemove.id) {
        updatedCount = itemCount - item.quantity;
        updatedTotal = cartTotal - item.quantity * item.price;
      }
      return item.id != itemToRemove.id;
    });
    setCartTotal(updatedTotal);
    setItemCount(updatedCount);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    setItemCount(0);
    setCartTotal(0);
  };

  const isInCart = (id) => {
    return cart.some((itemInCart) => itemInCart.id === id);
  };

  return (
    <Context.Provider
      value={{
        cart,
        itemCount,
        addItem,
        removeItem,
        clearCart,
        cartTotal,
        shippingFees,
        tax,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
