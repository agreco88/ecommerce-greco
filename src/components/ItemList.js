import Item from "./Item";

const ItemList = ({ products }) => {
  console.log("Products:", products);
  return (
    <div className="">
      <div className="max-w-2xl mx-auto p-16 px-4 h-full lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
