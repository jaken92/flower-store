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
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-3 mt-6 mb-6 px-8 ">
        <div className="relative">
          <Link to={`/collections`}>
            <img
              className="image-size"
              src="./images/heroes/collections.webp"
              alt="Collections"
            />
          </Link>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
            <h2>Order flowers</h2>
            <button className="bg-white hover:bg-transparent  hover:text-white text-black border-2  border-white font-bold py-2 px-4 rounded">
              <Link to={`/collections`}>Order now</Link>
            </button>
          </div>
        </div>
        <div className="relative">
          <Link to={`/pages/weddings`}>
            <img
              className="image-size"
              src="./images/heroes/weddings.webp"
              alt="Weddings"
            />
          </Link>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
            <p>Weddings</p>
            <button className="bg-white hover:bg-transparent hover:text-white text-black  border-2 border-white font-bold py-2 px-4 rounded">
              <Link to={`/pages/weddings`}>Learn more</Link>
            </button>
          </div>
        </div>
        <div className="relative">
          <Link to={`/pages/subscriptions`}>
            <img
              className="image-size"
              src="./images/heroes/subscriptions.webp"
              alt="Subscriptions"
            />
          </Link>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
            <p>Subscriptions</p>
            <button className="bg-white hover:bg-transparent hover:text-white text-black  border-2  border-white  font-bold py-2 px-4 rounded">
              <Link to={`/pages/subscriptions`}>Inquire</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
