import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="group relative">
      <div className="relative transition duration-500 ease-in-out w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 cursor-pointer lg:h-80 lg:aspect-none">
        <Link to={`/detail/${product.id}`}>
          <img
            src={product?.img}
            alt={product?.name}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </Link>
      </div>
      <div className="transition duration-500 ease-in-out mt-4 flex flex-col gap-4 opacity-50 group-hover:opacity-100">
        <div>
          <Link to={`/detail/${product.id}`}>
            <h3 className="text-xl font-bold text-gray-900 hover:text-orange-700 cursor-pointer">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          <p className="flex text-gray-900 items-center ">
            <span>$</span>
            <span className="text-xl pl-0.5">{product.price}</span>
          </p>
          <p className="mt-1 text-sm text-orange-700">
            {product.stock > 0
              ? `Only ${product.stock} left in stock - order soon.`
              : `No items in stock.`}
          </p>
          <p className="mt-1 text-sm text-gray-500 font-light">
            Ships to Uruguay
          </p>
        </div>
        <div className="">{product?.description}</div>
      </div>
    </div>
  );
};

export default Item;
