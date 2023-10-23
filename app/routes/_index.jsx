import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export function meta() {
  return [
    {title: 'Maouflowers'},
    {description: 'A graduation work creating a shopify store with Hydrogen'},
  ];
}

// export async function loader({context}) {
//   return await context.storefront.query(COLLECTIONS_QUERY);
// }

export default function Index() {
  return (
    <section className="w-full gap-4">
      <img
        className="w-full h-screen object-cover"
        src="./images/heroes/flowerHero.jpg"
      ></img>
    </section>
  );
}
