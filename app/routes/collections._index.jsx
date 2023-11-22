import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

const seo = () => ({
  title: 'Order Flowers',
  description: 'Order Arrangements, Bouquets, Flower boxes and other gifts',
});
export const handle = {
  seo,
};

export async function loader({context}) {
  return await context.storefront.query(COLLECTIONS_QUERY);
}

export default function Collections() {
  const {collections} = useLoaderData();
  return (
    <section className="w-full mt-10 gap-2">
      <div className="grid-flow-row grid md:gap-2 p-8 md:mb-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {collections.nodes.map((collection) => {
          return (
            <Link to={`/collections/${collection.handle}`} key={collection.id}>
              <div className="grid p-2 md:p-6 md:mt-20 relative">
                {collection?.image && (
                  <Image
                    className="object-cover h-96 w-96 img-zoom"
                    alt={`Image of ${collection.title}`}
                    data={collection.image}
                    key={collection.id}
                    sizes="(max-width: 32em) 100vw, 33vw"
                    crop="center"
                  />
                )}
                <h2 className="absolute inset-0 text-white flex items-center justify-center whitespace-pre-wrap max-w-prose  md:text-lg text-copy">
                  <span className="bg-black bg-opacity-40 p-2 rounded text-white">
                    {collection.title}
                  </span>
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
const COLLECTIONS_QUERY = `#graphql
    query FeaturedCollections {
      collections(first: 10, query: "collection_type:smart") {
        nodes {
          id
          title
          handle
          image {
              altText
              width
              height
              url
            }
        }
      }
    }
  `;
