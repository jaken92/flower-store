export default function AboutPage({secondaryContent}) {
  return (
    <>
      <section className="w-full gap-4">
        <img
          className="w-full h-screen object-cover"
          src="../images/heroes/flowerHero.jpg"
          alt="hero for about-page"
        ></img>
      </section>
      <h2>{secondaryContent}</h2>
      <div className="flex flex-col md:flex-wrap justify-center items-center md:flex-row w-full p-8 ">
        <img
          className=" md:w-[60%] w-[100%] h-[300px] rounded-full md:h-[400px] object-cover "
          src="../images/mouaAbtImg2.webp"
          alt="person arranging a flowerbouqet on a table in a nice setting"
        />

        <div className="w-full md:pt-15 pt-10 ">
          <h2 className="md:text-4xl text-3xl font-bold uppercase text-center font-custom">
            Ana Laura Galicia
          </h2>
          <p className="font-custom mb-1 text-center md:text-3xl text-2xl uppercase ">
            Founder/designer
          </p>
          <div className="flex">
            <p className="font-custom md:pt-6  text-gray-500 md:pl-10 md:pr-10 text-center text-lg md:text-2xl">
              Hey! My name is Ana and im the creator of Moua flowers with a
              cause. Flowers fill my soul & I passionatly design arrangment
              hoping to make you feel a sense of elegance, beauty and simplicity
              through flowers, while encourage & inspire you to help nature in
              the way i can
            </p>
          </div>
        </div>
      </div>
      {/*ADD ANIMATION HERE IF WE HAVE THE TIME */}
      <h2 className="center heading  md:text-3xl">Flower Journey</h2>
      <div className="flex flex-col md:pl-20 md:pr-20 md:gap-20 md:flex-row w-full p-8 ">
        <div className="w-full md:w-[50%]  pt-20 ">
          <h2 className="text-2xl font-bold  uppercase text-center font-custom">
            Flower Journey
          </h2>
          <p className="text-gray-500 text-lg font-custom mt-2">
            My flower journey started as an event & wedding planning coordinator
            in my home town Mexico City, I just fell in love with being in
            contact with flowers in every single event & felt truly inspired by
            them.
          </p>
          <p className="text-gray-500 text-lg font-custom mt-2">
            Since then I have been self-trained & educated with incredible
            contemporary style florists in the industry. This is where I really
            developed my airy & loose style.
          </p>
          <p className="text-gray-500 text-lg font-custom mt-2">
            Later on, love got on the way... while working with a wedding
            planner in Barcelona, Spain I met my now Swedish boyfriend & why
            not? took a life-changing decision... keen to explore something more
            & eager to learn another style I moved from México City to Göteborg,
            Sweden.
          </p>
          <p className="text-gray-500 text-lg font-custom mt-2 mb-4">
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
      <div className="flex flex-col-reverse md:pl-10 md:pr-10 md:gap-20 md:flex-row w-full p-8 mt-10">
        <img
          className="object-cover md:w-[50%] mt-4"
          src="../images/example.webp"
          alt="white and orange flowers"
        />
        <div className="w-full md:w-[40%]  justify-center ">
          <h1 className="text-2xl uppercase  font-bold mb-4 md:mt-4 text-center font-custom">
            Who are we
          </h1>
          <p className="text-gray-500 text-lg font-custom mt-2">
            Moua flowers with cause concept offers high quality floral
            arrangements for any occasion & personalized service of which a
            percentage of the total cost of each order will be donated to
            associations dedicated to the conservation of marine species & ocean
            care.
          </p>
          <p className="text-gray-500 text-lg font-custom mt-2">
            Our style is loose, organic & elegant, we are nature lovers that’s
            why it’s important for us that most of our designs take you to a
            natural world with movement & a natural fall of flowers to embrace
            the plants natural habit by giving you the illusion of flowers
            growing out of the base.
          </p>
          <p className="text-gray-500 text-lg font-custom mt-2">
            We celebrate the best of the season, that’s why for our designs, we
            try to use seasonal flowers since it is the moment when they shine
            with all their beauty, naturalness & aroma of fresh flowers.
          </p>
        </div>
      </div>
    </>
  );
}
