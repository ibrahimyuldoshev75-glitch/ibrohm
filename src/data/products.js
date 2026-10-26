const products = [
  {
    id: 1,
    title: "Margherita",
    filling: "Cheese, tomato, basil...",
    sizes: [
      { diameter: 22, price: 6.35 },
      { diameter: 28, price: 7.35 },
      { diameter: 33, price: 9.35 },
    ],
    ingredients: [
      { id: "mozzarella", name: "Mozzarella", price: 1.20 },
      { id: "mushrooms", name: "Mushrooms", price: 0.80 },
      { id: "olives", name: "Olives", price: 0.70 },
    ],
    image: "/images/margherita.png",
  },
  {
    id: 2,
    title: "Venecia",
    filling: "Cheese, tomato, mushrooms, olives...",
    sizes: [
      { diameter: 22, price: 7.35 },
      { diameter: 28, price: 8.35 },
      { diameter: 33, price: 10.35 },
    ],
    ingredients: [
      { id: "mozzarella", name: "Mozzarella", price: 1.20 },
      { id: "mushrooms", name: "Mushrooms", price: 0.80 },
      { id: "olives", name: "Olives", price: 0.70 },
    ],
    image: "/images/venecia.png",
  },
  {
    id: 3,
    title: "Meat",
    filling: "Chicken, beef, tomato, cheese...",
    sizes: [
      { diameter: 22, price: 7.35 },
      { diameter: 28, price: 8.35 },
      { diameter: 33, price: 10.35 },
    ],
    ingredients: [
      { id: "mozzarella", name: "Mozzarella", price: 1.20 },
      { id: "mushrooms", name: "Mushrooms", price: 0.80 },
      { id: "olives", name: "Olives", price: 0.70 },
    ],
    image: "/images/meat.png",
  },


  {
    id: 4,
    title: "Cheese",
    filling: "Cheese, tomato, mushrooms, olives...",

    sizes: [
      { diameter: 22, price: 6.35 },
      { diameter: 28, price: 7.35 },
      { diameter: 33, price: 9.35 },
    ],

    ingredients: [
      { id: "mozzarella", name: "Mozzarella", price: 1.20 },
      { id: "mushrooms", name: "Mushrooms", price: 0.80 },
      { id: "olives", name: "Olives", price: 0.70 },
      { id: "pepperoni", name: "Pepperoni", price: 1.50 },
    ],

    image: "/images/cheese.png",


  },
  {
    id: 5,
    title: "Pepperoni",
    filling: "Pepperoni, cheese, tomato, mushrooms...",
    sizes: [
      { diameter: 22, price: 7.35 },
      { diameter: 28, price: 8.35 },
      { diameter: 33, price: 10.35 },
    ],

    ingredients: [
      { id: "mozzarella", name: "Mozzarella", price: 1.20 },
      { id: "mushrooms", name: "Mushrooms", price: 0.80 },
      { id: "olives", name: "Olives", price: 0.70 },
      { id: "pepperoni", name: "Pepperoni", price: 1.50 },
    ],
    image: "/images/pepperoni.png",
  },
  {
    id: 6,
    title: "Hawaiian",
    filling: "Pineapple, ham, cheese, tomato...",
    sizes: [
      { diameter: 22, price: 7.35 },
      { diameter: 28, price: 8.35 },
      { diameter: 33, price: 10.35 },
    ],
    ingredients: [
      { id: "mozzarella", name: "Mozzarella", price: 1.20 },
      { id: "mushrooms", name: "Mushrooms", price: 0.80 },
      { id: "olives", name: "Olives", price: 0.70 },
      { id: "pepperoni", name: "Pepperoni", price: 1.50 },
    ],
    image: "/images/hawaiian.png",
  },
  {
    id: 7,
    title: "Veggie",
    filling: "Onion, potato, tomato, mushrooms, cheese, olives...",
    sizes: [
      { diameter: 22, price: 6.35 },
      { diameter: 28, price: 7.35 },
      { diameter: 33, price: 9.35 },
    ],
    ingredients: [
      { id: "mozzarella", name: "Mozzarella", price: 1.20 },
      { id: "mushrooms", name: "Mushrooms", price: 0.80 },
      { id: "olives", name: "Olives", price: 0.70 },
    ],
    image: "/images/veggie.png",
  },
  {
    id: 8,
    title: "BBQ Chicken",
    filling: "Chicken, BBQ sauce, cheese, tomato...",
    sizes: [
      { diameter: 22, price: 7.35 },
      { diameter: 28, price: 8.35 },
      { diameter: 33, price: 10.35 },
    ],
    ingredients: [
      { id: "mozzarella", name: "Mozzarella", price: 1.20 },
      { id: "mushrooms", name: "Mushrooms", price: 0.80 },
      { id: "olives", name: "Olives", price: 0.70 },
    ],
    image: "/images/bbq-chicken.png",
  },
];

export default products;
