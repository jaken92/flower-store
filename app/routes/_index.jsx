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
            loading="lazy"
            className="h-[400px] sm:w-full sm:h-screen object-cover"
            src="./images/heroes/flowerHero.jpg"
            alt="hero image with flowers on a table"
          ></img>
          <img
            className="w-[180px] sm:w-[300px] md:w-[580px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            src="../images/WhiteLogoNoBackgroundResized.png"
            alt="Moua flowers with a cause"
          />
        </div>
      </section>
      <div className="flex flex-col justify-center items-center mt-14">
        <h2 className="text-2xl md:text-4xl text-gray-600 text-center w-2/3 mb-5">
          MOUAFLOWERS - GOTHENBURG - SWEDEN
        </h2>
        <p className="text-4xl text-gray-600 mb-5">❀</p>
        <p className="text-lg md:text-1xl text-gray-600 text-center p-8 md:w-1/2 mb-5">
          IN MOUA WE CREATE UNIQUE, ELEGANT & NATURAL STYLE ARRANGEMENTS, FULL
          OF TEXTURES, COLORS & CURVES FOR ANY OCCASION THROUGH WHICH ANYONE CAN
          VIBRATE, HELP & RECONNECT WITH NATURE & ITS BEAUTY BY MERGING OUR TWO
          PASSIONS; THE FLOWERS & THE OCEAN.
        </p>
      </div>

      <Carousel reviews={reviews} />

      <section className="w-full p-6 pt-0 sm:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0 sm:-px-10 lg:px-10 xl:px-20 2xl:px-80 ">
        <div className="max-w-screen-xl mx-auto">
          {/* Small cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xxl:gap-20 w-full sm:justify-items-center sm:mx-auto">
            <LinkCard
              text="Order Flowers"
              imageSrc="../images/collections.jpeg"
              linkTo="/collections"
              alt="flowers in a vase"
              btnText="Order now"
            />
            <LinkCard
              text="Weddings"
              imageSrc="../images/weddings.jpg"
              linkTo="/pages/weddings"
              alt="a picture of two people that are getting married, the bride is carrying a bouquet of flowers"
              btnText="Learn more"
            />
            <LinkCard
              text="Subscriptions"
              imageSrc="../images/subscriptions.webp"
              linkTo="/pages/subscriptions"
              alt="a house with purple flowers covering it"
              btnText="Inquire"
            />
          </div>

          {/* Wide card */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-6 xxl:mt-20">
            <div className="col-span-1 md:col-span-3">
              <WideLinkCard
                text="About"
                imageSrc="./images/rusticBouquetResized.jpg"
                linkTo="/pages/about"
                btnText="Read More"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
