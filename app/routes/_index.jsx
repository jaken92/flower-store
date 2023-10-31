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
        <div className="relative">
          <img
            className="w-full h-screen object-cover"
            src="./images/heroes/flowerHero.jpg"
          ></img>
          <img
            className="h-[580px] w-580px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            src="../images/WhiteLogoNoBackground.png"
            alt=""
          />
        </div>
      </section>
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-3 mt-6 mb-6 px-8 bg-white ">
        <ImageLinkComponent
          text="Order Flowers"
          imageSrc="./images/heroes/collections.webp"
          linkTo="/collections"
          alt="flowers in a vase"
          btnText="Order now"
        />
        <ImageLinkComponent
          text="Weddings"
          imageSrc="./images/heroes/weddings.webp"
          linkTo="/pages/weddings"
          alt="a picture of two people that are getting married, the bride is carrying a bouquet of flowers"
          btnText="Learn more"
        />
        <ImageLinkComponent
          text="Subscriptions"
          imageSrc="./images/heroes/subscriptions.webp"
          linkTo="/pages/subscriptions"
          alt="a house with purple flowers covering it"
          btnText="Inquire"
        />
      </div>
    </>
  );
}
