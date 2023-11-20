import ProductCard from './ProductCard';

export default function ProductGrid({collection, url}) {
  return (
    <section className="w-full justify-items-center md:gap-8 md:mb-10 mb-5 grid md:p-10 p-4 ">
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4  md:grid-cols-2">
        {collection.products.nodes.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
