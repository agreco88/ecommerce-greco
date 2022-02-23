import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = ({ cartItemCount }) => {
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
          <NavLink to={"/"}>
            <h3 className="text-2xl font-extralight">eCommerce</h3>
          </NavLink>{" "}
        </div>
        <div className="flex">
          <div className="flex gap-16 items-center font-light uppercase ">
            <NavLink
              to={"/category/celular"}
              className={({ isActive }) =>
                isActive
                  ? "transition duration-500 ease-in-out border-b border-black"
                  : "transition duration-500 ease-in-out border-b hover:border-black opacity-50 hover:opacity-50"
              }
            >
              Celular
            </NavLink>
            <NavLink
              to={"/category/tablet"}
              className={({ isActive }) =>
                isActive
                  ? "transition duration-500 ease-in-out border-b border-black opacity-100"
                  : "transition duration-500 ease-in-out border-b hover:border-black opacity-50 hover:opacity-50"
              }
            >
              Tablet
            </NavLink>
            <NavLink
              to={"/category/notebook"}
              className={({ isActive }) =>
                isActive
                  ? "transition duration-500 ease-in-out border-b border-black"
                  : "transition duration-500 ease-in-out border-b hover:border-black opacity-50 hover:opacity-50"
              }
            >
              Notebook
            </NavLink>
            <CartWidget numberOfItems={cartItemCount} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
