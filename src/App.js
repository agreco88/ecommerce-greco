import ItemCount from "./components/ItemCount";
import ItemListCointainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <ItemListCointainer
        userName="Agustin"
        greeting="Welcome"
        cartItemCount="9"
      />

      <ItemCount
        itemName="Camisa tiger"
        stock={5}
        initialNumber={2}
        onAdd={null}
      />
    </div>
  );
}

export default App;
