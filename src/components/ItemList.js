import Item from "./Item";

const ItemList = ({ products, category }) => {
  console.log("ItemList props:", products);
  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8 h-full">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 ">
        {category ? (
          <p className="text-4xl">
            <span className="font-thin bg-opacity-25">Filtering by: </span>
            <span className="font-light bg-opacity-50 uppercase">
              {category}
            </span>
          </p>
        ) : (
          <p>Latest offers:</p>
        )}
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
