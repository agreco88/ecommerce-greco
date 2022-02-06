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
    </div>
  );
}

export default App;
