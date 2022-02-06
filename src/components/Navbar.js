import Button from "./Button";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const handleCelular = () => {
    console.log("Celulares");
  };

  const handleTablet = () => {
    console.log("Tablets");
  };

  const handleNotebook = () => {
    console.log("Notebook");
  };

  return (
    <nav className="w-full py-4 border-b border-gray-200 bg-gray-50">
      <div className="h-full items-center container mx-auto flex justify-between">
        <div className="flex items-center gap-4 italic font-extrabold text-black">
          <h3 className="text-2xl font-extralight">eCommerce</h3>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-4">
            <Button label={"Celulares"} handleClick={handleCelular} />
            <Button label={"Tablets"} handleClick={handleTablet} />
            <Button label={"Notebook"} handleClick={handleNotebook} />
            <CartWidget numberOfItems={9} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
