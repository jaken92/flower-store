import {useLoaderData} from '@remix-run/react';

export function meta() {
    return [
      {title: 'Maouflowers'},
      {description: 'A graduation work creating a shopify store with Hydrogen'},
    ];
  }

  export async function loader({context}) {
    return await context.storefront.query(COLLECTIONS_QUERY);
  }


  export default function Index() {
    const {collections} = useLoaderData();
    console.log(collections);
    return <h1>Hello from the home page!</h1>;
  }
  const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 3, query: "collection_type:smart") {
      nodes {
        id
        title
        handle
      }
    }
  }
`;  