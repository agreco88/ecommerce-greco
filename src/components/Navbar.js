import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  const navigation = [
    { name: "Smartphones", path: "/category/smartphones" },
    { name: "Tablets", path: "/category/tablets" },
    { name: "Laptops", path: "/category/laptops" },
  ];

  return (
    <nav className="w-full py-4 border-b border-gray-200 bg-gray-50">
      <div className="h-full items-center container mx-auto flex justify-between">
        <div className="flex items-center gap-4 italic font-extrabold text-black">
          <NavLink to={"/"}>
            <h3 className="text-2xl font-extralight">eCommerce</h3>
          </NavLink>
        </div>
        <div className="flex gap-8">
          <ul className="flex gap-16 items-center font-light uppercase">
            {navigation.map((category) => {
              return (
                <NavLink
                  key={category.name}
                  to={category.path}
                  className={({ isActive }) =>
                    isActive
                      ? "transition duration-500 ease-in-out border-b border-black"
                      : "transition duration-500 ease-in-out border-b hover:border-black opacity-50 hover:opacity-50"
                  }
                >
                  {category.name}
                </NavLink>
              );
            })}
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
