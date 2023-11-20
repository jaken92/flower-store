import LinkCard from '~/components/LinkCard';
import Carousel from '~/components/Carousel';
import WideLinkCard from '~/components/WideLinkCard';

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
  {
    review:
      'Incredible attention and service, punctual delivery and a super beautiful design! Thank you very much for making this surprise possible !!!',
    client: 'Lourdes',
  },
  {
    review:
      'She was absolutely in love with the bouquet & it made her so happy. She also immediately wanted to know where we got it from because it put all the bouquets she had ever gotten before to shame, so im sure you will have a new costumer now as well.',
    client: 'Zhudi',
  },
];

export default function Index() {
  return (
    <>
      <section className="md:w-full gap-4">
        <div className="relative">
          <img
            className="h-[400px] sm:w-full sm:h-screen object-cover"
            src="./images/heroes/flowerHero.jpg"
            alt="hero image with flowers on a table"
          ></img>
          <img
            className="w-[180px] sm:w-[300px] md:w-[580px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            src="../images/WhiteLogoNoBackground.png"
            alt="Moua flowers with a cause"
          />
        </div>
      </section>
      <div className="flex flex-col justify-center items-center mt-14">
        <h2 className="text-4xl text-gray-600">
          MOUAFLOWERS - GOTHENBURG - SWEDEN
        </h2>
        <p className="text-4xl text-gray-600">❀</p>
        <p className=" text-gray-600 text-center w-1/2">
          IN MOUA WE CREATE UNIQUE, ELEGANT & NATURAL STYLE ARRANGEMENTS, FULL
          OF TEXTURES, COLORS & CURVES FOR ANY OCCASION THROUGH WHICH ANYONE CAN
          VIBRATE, HELP & RECONNECT WITH NATURE & ITS BEAUTY BY MERGING OUR TWO
          PASSIONS; THE FLOWERS & THE OCEAN.
        </p>
      </div>
      <div className="grid-flow-row grid  p-6  gap-4 justify-items-center gap-y-6 md:gap-3 grid-cols-1 md:grid-cols-3 mt-6 mb-0">
        <LinkCard
          text="Order Flowers"
          imageSrc="./images/heroes/collections.jpeg"
          linkTo="/collections"
          alt="flowers in a vase"
          btnText="Order now"
        />
        <LinkCard
          text="Weddings"
          imageSrc="./images/heroes/weddings.jpg"
          linkTo="/pages/weddings"
          alt="a picture of two people that are getting married, the bride is carrying a bouquet of flowers"
          btnText="Learn more"
        />
        <LinkCard
          text="Subscriptions"
          imageSrc="./images/heroes/subscriptions.webp"
          linkTo="/pages/subscriptions"
          alt="a house with purple flowers covering it"
          btnText="Inquire"
        />
      </div>
      <div className="flex justify-center relative mb-12 ">
        <WideLinkCard
          text="About"
          imageSrc="./images/rusticBouquet.jpg"
          linkTo="/pages/about"
          btnText="Read More"
        />
      </div>
      <Carousel reviews={reviews} />
    </>
  );
}
