const Button = ({ label, backgroundColor, textColor, handleClick }) => {
  return (
    <span
      className={`
        flex items-center 
        uppercase text-black font-extralight 
        hover:border-b hover:border-black 
        transition-all duration-200
        `}
      onClick={handleClick}
    >
      {label}
    </span>
  );
};

export default Button;
