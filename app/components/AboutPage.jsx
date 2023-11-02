export default function AboutPage({content, title}) {
  return (
    <>
      <section className="w-full gap-4">
        <img
          className="w-full h-screen object-cover"
          src="../images/heroes/flowerHero.jpg"
        ></img>
      </section>

      <div class="p-4">
        <div class="flex flex-col md:flex-row w-full p-4 md:p-20 mt-20">
          <div class="w-full md:w-1/2 pt-20 pr-10">
            <h2 class="text-2xl font-bold mb-4 text-center font-custom">
              FLOWER JOURNEY
            </h2>
            <p class="text-gray-500 text-lg font-custom mt-2">
              My flower journey started as an event & wedding planning
              coordinator in my home town Mexico City, I just fell in love with
              being in contact with flowers in every single event & felt truly
              inspired by them.
            </p>
            <p class="text-gray-500 text-lg font-custom mt-2">
              Since then I have been self-trained & educated with incredible
              contemporary style florists in the industry. This is where I
              really developed my airy & loose style.
            </p>
            <p class="text-gray-500 text-lg font-custom mt-2">
              Later on, love got on the way... while working with a wedding
              planner in Barcelona, Spain I met my now Swedish boyfriend & why
              not? took a life-changing decision... keen to explore something
              more & eager to learn another style I moved from México City to
              Göteborg, Sweden.
            </p>
            <p class="text-gray-500 text-lg font-custom mt-2">
              Moua Flowers with cause is based in Högsbo, southwest Göteborg &
              is available for floral styling, weddings & events of all sizes.
              We want to make you beautiful flowers, for whatever the occasion.
            </p>
          </div>
          <img
            class="h-[500px] w-[500px] object-cover"
            src="../images/mouaAbtImg2.webp"
            alt="Your Image"
          />
        </div>
      </div>

      <div class="p-4">
        <div class="flex flex-col md:flex-row w-full p-4 md:p-20">
          <img
            class="object-contain w-full h-1/2"
            src="../images/example.webp"
            alt="Your Image"
          />
          <div class="w-full md:w-1/2 justify-center pl-10 mb-20">
            <h1 class="text-2xl font-bold mb-4 text-center font-custom">
              WHO ARE WE
            </h1>
            <p class="text-gray-500 text-lg font-custom mt-2">
              Moua flowers with cause concept offers high quality floral
              arrangements for any occasion & personalized service of which a
              percentage of the total cost of each order will be donated to
              associations dedicated to the conservation of marine species &
              ocean care.
            </p>
            <p class="text-gray-500 text-lg font-custom mt-2">
              Our style is loose, organic & elegant, we are nature lovers that’s
              why it’s important for us that most of our designs take you to a
              natural world with movement & a natural fall of flowers to embrace
              the plants natural habit by giving you the illusion of flowers
              growing out of the base.
            </p>
            <p class="text-gray-500 text-lg font-custom mt-2">
              We celebrate the best of the season, that’s why for our designs,
              we try to use seasonal flowers since it is the moment when they
              shine with all their beauty, naturalness & aroma of fresh flowers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
