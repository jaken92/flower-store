import {useLoaderData} from '@remix-run/react';
import {Link} from 'react-router-dom';
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
    <>
      <section className="w-full gap-4">
        <img
          className="w-full h-screen object-cover"
          src="./images/heroes/flowerHero.jpg"
        ></img>
      </section>
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-3">
        <Link to={`/collections`}>Order flowers</Link>
        <Link to={`/pages/weddings`}>Weddings</Link>
        <Link to={`/pages/subscriptions`}>Subscriptions</Link>
      </div>
    </>
  );
}
