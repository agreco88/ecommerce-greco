import { useState } from "react";
// import Select from '../Select/Select'

const InputCount = ({ onConfirm, stock, initial = 0 }) => {
  const [count, setCount] = useState(initial);

  const handleChange = ({ target }) => {
    if (target.value <= stock && target.value >= 0) {
      setCount(target.value);
    }
  };

  return (
    <div>
      <input type="number" onChange={handleChange} value={count} />
      <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
    </div>
  );
};

const ButtonCount = ({ onConfirm, stock, initial = 0 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
    </div>
  );
};

const ItemDetail = ({
  name,
  img,
  stock,
  category,
  description,
  price,
  inputType = "button",
}) => {
  const [option, setOption] = useState();
  const options = [
    { value: 1, text: "Azul" },
    { value: 2, text: "Rojo" },
  ];

  const optionSelected = (value) => {
    console.log(value);
    setOption(value);
  };

  const Count = inputType === "button" ? ButtonCount : InputCount;

  const onConfirm = () => {
    console.log("agregue al carrito");
  };

  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      {/* <Select options={options} onSelect={optionSelected} defaultOption={1}/> */}
      <section>
        <p className="Info">Categoria: {category}</p>
        <p className="Info">Descripción: {description}</p>
        <p className="Info">Precio: {price}</p>
      </section>
      <footer className="ItemFooter">
        <Count onConfirm={onConfirm} stock={stock} inicial={1} />
      </footer>
      <h3>El valor del select es {option}</h3>
    </article>
  );
};

export default ItemDetail;
