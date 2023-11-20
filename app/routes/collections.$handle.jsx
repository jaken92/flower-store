import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import ProductGrid from '../components/ProductGrid';

const seo = ({data}) => ({
  title: data?.collection?.title,
  description: data?.collection?.description.substr(0, 154),
});
export const handle = {
  seo,
};

export async function loader({params, context}) {
  // const {MyContext} = context;
  const {handle} = params;
  const {collection} = await context.storefront.query(COLLECTION_QUERY, {
    variables: {
      handle,
    },
  });

  if (!collection) {
    throw new Response(null, {status: 404});
  }

  return json({
    collection,
  });
}

export default function Collection() {
  const {collection} = useLoaderData();

  return (
    <>
      <header className="grid w-full gap-6 py-4 justify-items-center">
        <h1 className="text-4xl  text-gray-600 whitespace-pre-wrap mt-28  font-bold inline-block">
          {collection.title}
        </h1>

        {collection.description && (
          <div className="flex justify-center p-4 w-full">
            <div className="max-w-4xl">
              <p
                className="whitespace text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: collection.description.replace(/\n/g, '<br />'),
                }}
              />
            </div>
          </div>
        )}
      </header>
      <ProductGrid
        collection={collection}
        url={`/collections/${collection.handle}`}
      />
    </>
  );
}
const COLLECTION_QUERY = `#graphql
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      handle
      products(first: 4) {
        nodes {
          id
          title
          publishedAt
          handle
          variants(first: 1) {
            nodes {
              id
              image {
                url
                altText
                width
                height
              }
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;
