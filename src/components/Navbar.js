const Navbar = () => {
  return (
    <nav className="bg-red-500 w-full h-14">
      <div className="h-full items-center container mx-auto flex bg-red-800 justify-between">
        <div>
          <h3>Coderplace</h3>
        </div>
        <div className="flex gap-4">
          <button>Boton</button>
          <ul className="flex gap-4">
            <li>Link1</li>
            <li>Link1</li>
            <li>Link1</li>
            <li>Link1</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
