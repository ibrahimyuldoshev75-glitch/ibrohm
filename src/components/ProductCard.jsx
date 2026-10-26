import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [size, setSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [ingredients, setIngredients] = useState([]);

  const toggleIngredient = (ingredient) => {
    setIngredients((prev) =>
      prev.some((item) => item.id === ingredient.id)
        ? prev.filter((item) => item.id !== ingredient.id)
        : [...prev, ingredient]
    );
  };

  const totalPrice =
    (size.price +
      ingredients.reduce((sum, item) => sum + item.price, 0)) *
    quantity;

  return (
    <div className="w-[297px] overflow-hidden rounded-2xl bg-[#1E1E1E] text-white">
      <img
        src={product.image}
        alt={product.title}
        className="h-[200px] w-full object-contain"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="mt-2 text-sm text-gray-400">
          {product.filling}
        </p>

        <div className="mt-4 flex gap-2">
          {product.sizes.map((item) => (
            <button
              key={item.diameter}
              onClick={() => setSize(item)}
              className={`flex-1 h-[40px] w-[40px] rounded-full py-2 ${
                size.diameter === item.diameter
                  ? 'bg-[#FF6432]'
                  : 'bg-[#333333]'
              }`}
            >
              {item.diameter}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <p className="mb-2">Ingredients</p>

          {product.ingredients.map((ingredient) => (
            <label
              key={ingredient.id}
              className="mb-2 flex items-center justify-between text-sm"
            >
              <span>{ingredient.name} (+${ingredient.price.toFixed(2)})</span>
              <input
                type="checkbox"
                checked={ingredients.some(
                  (item) => item.id === ingredient.id
                )}
                onChange={() => toggleIngredient(ingredient)}
              />
            </label>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">
            ${totalPrice.toFixed(2)}
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="rounded bg-[#333333] px-3 py-1"
            >
              -
            </button>

            <p>{quantity}</p>

            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="rounded bg-[#333333] px-3 py-1"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={() =>
            console.log({
              product: product.title,
              size: size.diameter,
              quantity,
              ingredients: ingredients.map((item) => item.name),
              total: totalPrice,
            })
          }
          className="mt-5 w-full rounded-xl bg-[#FF6432] py-3 font-bold"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};


export default ProductCard;