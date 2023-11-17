import {useInView} from 'react-intersection-observer';
export default function AboutPage({secondaryContent}) {
  const {ref: ref1, inView: inView1} = useInView({
    triggerOnce: true,
  });

  const {ref: ref2, inView: inView2} = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <section className="w-full gap-4">
        <div className="relative">
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 sm:p-3">
            <h1 className="text-3xl font-customFancy text-center sm:text-6xl bg-black bg-opacity-30 p-2 rounded text-white">
              ABOUT
            </h1>
          </div>
          <img
            className="h-[400px] sm:w-full sm:h-screen object-cover"
            src="../images/heroes/flowerHero.jpg"
            alt="hero for about-page"
          ></img>
        </div>
      </section>
      {/* <h2>{secondaryContent}</h2> */}
      <div className="flex flex-col md:flex-wrap justify-center items-center md:flex-row w-full p-8 ">
        <img
          className=" md:w-[60%] w-[100%] h-[300px] rounded-full md:h-[400px] object-cover "
          src="../images/mouaAbtImg2.webp"
          alt="person arranging a flowerbouqet on a table in a nice setting"
        />

        <div className="w-full md:pt-15 pt-10 ">
          <h2 className="md:text-3xl text-2xl font-bold uppercase text-center font-custom">
            Ana Laura Galicia
          </h2>
          <p className="font-custom mb-1 text-center md:text-2xl text-1xl uppercase ">
            Founder/designer
          </p>
          <div className="flex">
            <p className="font-custom md:pt-6   text-gray-500 md:pl-10 md:pr-10 text-center text-lg md:text-1xl">
              Hey! My name is Ana and im the creator of Moua flowers with a
              cause. Flowers fill my soul & I passionatly design arrangment
              hoping to make you feel a sense of elegance, beauty and simplicity
              through flowers, while encourage & inspire you to help nature in
              the way i can
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-4 border-white"></div>
      <div
        className={`flex flex-col md:pl-20 md:pr-20 md:gap-20 md:flex-row w-full p-8 ${
          inView1 ? 'fadeIn' : ''
        }`}
        ref={ref1}
      >
        <div className="w-full md:w-[50%]  md:pt-20 ">
          <h2 className="md:text-2xl  text-1xl font-bold  uppercase text-center font-custom">
            Flower Journey
          </h2>
          <p className="md:text-lg font-custom mt-2">
            My flower journey started as an event & wedding planning coordinator
            in my home town Mexico City, I just fell in love with being in
            contact with flowers in every single event & felt truly inspired by
            them.
          </p>
          <p className="md:text-lg font-custom mt-2">
            Since then I have been self-trained & educated with incredible
            contemporary style florists in the industry. This is where I really
            developed my airy & loose style.
          </p>
          <p className="md:text-lg font-custom mt-2">
            Later on, love got on the way... while working with a wedding
            planner in Barcelona, Spain I met my now Swedish boyfriend & why
            not? took a life-changing decision... keen to explore something more
            & eager to learn another style I moved from México City to Göteborg,
            Sweden.
          </p>
          <p className="md:text-lg font-custom mt-2 mb-4">
            Moua Flowers with cause is based in Högsbo, southwest Göteborg & is
            available for floral styling, weddings & events of all sizes. We
            want to make you beautiful flowers, for whatever the occasion.
          </p>
        </div>
        <img
          className=" md:w-[50%] md:mt-7 md:h-[500px] h-[300px] object-cover "
          src="../images/mouaAbtImg2.webp"
          alt=""
        />
      </div>
      <div
        className={`flex flex-col-reverse md:pl-10 md:pr-10 md:gap-20 md:flex-row w-full p-8 md:mt-10 ${
          inView2 ? 'fadeIn' : ''
        }`}
        ref={ref2}
      >
        <img
          className="object-cover md:w-[50%] mt-4"
          src="../images/example.webp"
          alt="white and orange flowers"
        />
        <div className="w-full md:w-[40%]  justify-center ">
          <h1 className="md:text-2xl text-1xl uppercase  font-bold mb-4 md:mt-4 text-center font-custom">
            Who are we
          </h1>
          <p className="md:text-lg font-custom mt-2">
            Moua flowers with cause concept offers high quality floral
            arrangements for any occasion & personalized service of which a
            percentage of the total cost of each order will be donated to
            associations dedicated to the conservation of marine species & ocean
            care.
          </p>
          <p className="md:text-lg font-custom mt-2">
            Our style is loose, organic & elegant, we are nature lovers that’s
            why it’s important for us that most of our designs take you to a
            natural world with movement & a natural fall of flowers to embrace
            the plants natural habit by giving you the illusion of flowers
            growing out of the base.
          </p>
          <p className="md:text-lg font-custom mt-2">
            We celebrate the best of the season, that’s why for our designs, we
            try to use seasonal flowers since it is the moment when they shine
            with all their beauty, naturalness & aroma of fresh flowers.
          </p>
        </div>
      </div>
    </>
  );
}
