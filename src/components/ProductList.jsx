
import products from "../data/products";
import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <section className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
}

export default ProductList;
