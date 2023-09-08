function Button({ color, index, handleClick }) {
  return (
    <button
      key={color}
      type="button"
      className="rounded-full mr-2 last:mr-0 px-3 py-1 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      style={{ backgroundColor: color }}
      onClick={() => handleClick(color)}
    >
      {color}
    </button>
  );
}

export default Button;
