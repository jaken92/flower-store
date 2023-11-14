import Button from './ButtonContact';

export default function WeddingsPage(secondaryContent) {
  return (
    <>
      <section className="md:w-full gap-4">
        <img
          className="md:w-full md:h-screen object-cover"
          src="../images/heroes/weddinghero.webp"
          alt="hero-image for weddingpage, a copule smiling with a flowerbouqeut in their hands"
        ></img>
      </section>

      <h2 className="font-custom mt-5 md:mt-10 md:text-3xl text-2xl uppercase text-center">
        Wedding floral design
      </h2>
      <div className="flex flex-col md:pl-20 md:pr-20 justify-center md:gap-20 md:flex-row w-full p-8 ">
        <div className="w-full md:w-[30%]  md:pt-20 ">
          <p className="font-customSemiBold md:mt-10 text-center md:text-2xl ">
            {' '}
            We know how special this day is & we would love to be part of your
            story.{' '}
          </p>
          <p className="font-custom mt-4 text-center md:text-lg  ">
            Focused on delivering a natural luxurious floral aesthetic, we
            specialize in a timeless garden aesthetic that will provide an
            elegant feel for your celebration.
          </p>
          <p className="font-custom mt-4 text-center md:text-lg ">
            Specialized in free foam airy designs Moua offers a full floral
            service: planning + styling+ installation (romantic ceremony
            settings, bouquets, low & tall centerpieces, floral installations,
            boutonnieres, floral crowns, corsages, unique candle decor & more)
          </p>
          <p className="font-custom mt-4 text-center md:text-lg ">
            We custom order your premium blooms and provide complete floral
            design / decor installation for each and every wedding whether
            intimate or large scale.
          </p>
        </div>
        <img
          className="  md:w-[40%] md:mt-7 md:h-[30%] h-[400px] mt-8 object-cover "
          src="../images/WeddingCouple.jpg"
          alt="two people getting married, wedding, standing on and in front of a stone-wall holding a wedding-bouqet"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-20 md:mt-10 md:pl-20 md:pr-10 p-8">
        <img
          className="  md:w-[40%] md:h-[50%] h-[400px] object-cover "
          src="../images/weddingBride.jpg"
          alt="Your Image"
        />
        <div className="flex md:w-[50%] md:h-[50%] gap-12 flex-col md:flex-col">
          <img
            className="  md:h-[40%] h-[500px]  object-cover "
            src="../images/weddingCar.jpg"
            alt=""
          />
          <img
            className=" hidden md:flex md:w-[900px] md:h-[300px] h-[300px]  object-cover "
            src="../images/BridalBouquet.jpg"
            alt="Your Image"
          />
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-custom md:text-2xl text-center uppercase">
          Planning a Wedding or Event?
        </h3>
        <p className="font-custom md:text-lg text-center">
          Get in contact in order for us to be able to send you the initial
          inquiry form where we will have more information about your special
          day.
        </p>
      </div>
      <section className="md:w-full  gap-4 relative">
        <img
          className="md:w-full md:h-screen object-cover"
          src="../images/bigweddingtest.webp"
          alt="wedding, a couple holding hands with a flowerbouqet"
        ></img>
        <div className="absolute md:top-[20%] top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Button
            linkTo="/pages/contact"
            text="GET IN CONTACT"
            aria-label="go to the contact-page"
          ></Button>
        </div>
      </section>
    </>
  );
}
