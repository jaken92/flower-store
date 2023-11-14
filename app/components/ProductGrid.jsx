import ProductCard from './ProductCard';

export default function ProductGrid({collection, url}) {
  return (
    <section className="w-full gap-4 md:gap-8 grid p-4 md:p-10">
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 grid-col-2 md:grid-cols-2 ">
        {collection.products.nodes.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
