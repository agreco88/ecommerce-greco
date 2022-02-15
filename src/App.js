import ItemCount from "./components/ItemCount";
import ItemListCointainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  const onAddHandle = (quantity) => {
    console.log("Added " + quantity + " items.");
  };

  return (
    <div>
      <Navbar />
      <ItemListCointainer
        userName="Agustin"
        greeting="Welcome"
        cartItemCount="9"
      />

      {/* <ItemCount
        itemName="Camisa tiger"
        stock={5}
        initialNumber={2}
        onAdd={onAddHandle}
      /> */}
    </div>
  );
}

export default App;
