import ImageLinkComponent from '~/components/LinkCard';
import Carousel from '~/components/Carousel';

// export function meta() {
//   return [
//     {title: 'Maouflowers'},
//     {description: 'A graduation work creating a shopify store with Hydrogen'},
//   ];
// }

const reviews = [
  {
    review:
      'The wedding flowers were excellent in the venue, the flowers suited the tables super nicely. And my bouquet was amazing, definitely what i expected and more',
    client: 'Moona',
  },
  {
    review:
      'Excellent cause but above all, the quality of the arrangements are elegant and fine. They take into account all the specifications to create unique arrangements.',
    client: 'Casandra',
  },
  {
    review:
      'She loved the flowers! and her daughter was very excited about them too. Thank you for the excellent costum service and for fulfilling my order so perfectly. ',
    client: 'Anaya',
  },
  {
    review:
      'Again, your flower arrangements is so unique and all flowers you choose have lovely color and beautiful unique shape. It is a joy to look at them.',
    client: 'Xiaoyang',
  },
];

export default function Index() {
  return (
    <>
      <section className="md:w-full gap-4">
        <div className="relative">
          <img
            className="md:w-full md:h-screen object-cover"
            src="./images/heroes/flowerHero.jpg"
            alt="hero image with flowers on a table"
          ></img>
          <img
            className="md:h-[580px] md:w-580px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            src="../images/WhiteLogoNoBackground.png"
            alt="Moua flowers with a cause"
          />
        </div>
      </section>
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-3 mt-6 mb-6 px-8 bg-white ">
        <ImageLinkComponent
          text="Order Flowers"
          imageSrc="./images/heroes/collections.jpeg"
          linkTo="/collections"
          alt="flowers in a vase"
          btnText="Order now"
        />
        <ImageLinkComponent
          text="Weddings"
          imageSrc="./images/heroes/weddings.jpg"
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
      <Carousel reviews={reviews} />
    </>
  );
}
