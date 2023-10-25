import ImageLinkComponent from '~/components/LinkCard';

export function meta() {
  return [
    {title: 'Maouflowers'},
    {description: 'A graduation work creating a shopify store with Hydrogen'},
  ];
}

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
        <ImageLinkComponent
          text="Order Flowers"
          imageSrc="./images/heroes/collections.webp"
          linkTo="/collections"
        />
        <ImageLinkComponent
          text="Weddings"
          imageSrc="./images/heroes/weddings.webp"
          linkTo="/pages/weddings"
        />
        <ImageLinkComponent
          text="Subscriptions"
          imageSrc="./images/heroes/subscriptions.webp"
          linkTo="/pages/subscriptions"
        />
      </div>
    </>
  );
}
