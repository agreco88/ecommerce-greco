import Item from "./Item";

const ItemList = ({ products }) => {
  console.log("Products:", products);
  return (
    // <ul className="grid grid-cols-4 justify-center items-center">
    //   {products.map((product) => (
    //     <Item key={product.id} product={product} />
    //   ))}
    // </ul>
    <div className="">
      <div className="max-w-2xl mx-auto p-16 px-4 h-full lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative ">
              <div className="w-full font-thin text-sm min-h-80 bg-white border border-gray-500 p-8 border-opacity-10 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full p-y-2 object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex flex-col">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.permalink}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-thin text-gray-900">
                  {product.address.city_name}, {product.address.state_name}
                </p>
                <p className="text-sm font-bold text-gray-900">
                  ${product.price} {product.installments.currency_id}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
