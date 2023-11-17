import Button from './ButtonContact';

import {useInView} from 'react-intersection-observer';

export default function SubscriptionsPage() {
  //Two Intersection Observers or two different divs, inView boolean to decide if the div is in view or not
  const {ref: ref1, inView: inView1} = useInView({
    triggerOnce: true,
  });

  const {ref: ref2, inView: inView2} = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <section className="md:w-full gap-4">
        <div className="relative">
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink p-2 sm:p-3">
            <h1 className="text-3xl font-custom text-center sm:text-6xl">
              SUBSCRIPTIONS
            </h1>
          </div>
          <img
            className="h-[400px] sm:w-full sm:h-screen object-cover"
            src="../images/heroes/subscriptionsHero.jpg"
            alt="subscriptionpage-hero, flowers in different shapes and colors"
          ></img>
        </div>
      </section>
      <h2 className="font-custom text-2xl uppercase text-center mb-5 mt-5 md:mt-10">
        A place for you to get flowers regulary and at a discount
      </h2>

      <section className="flex justify-center  ">
        <div className="flex p-5 md:flex-row flex-col gap-10 ">
          <div className="flex bg-white p-5 md:flex-col md:w-[50%] text-center justify-center border border-black">
            <p className="font-custom md:text-2xl ">
              10% off your recurring flower offer every time
            </p>
            <p className="font-custom md:text-2xl md:pt-4">
              10% off on any additional flower order
            </p>
          </div>
          <div className="flex bg-white p-5 md:flex-col md:w-[50%] text-center justify-center border md:p-4 border-black">
            <p className="font-custom md:text-2xl ">
              Wanna send an arrangment for a special occasion? 10% off
            </p>
            <p className="font-custom md:text-2xl md:pt-4">
              10 % off on workshops, events, parties etc.
            </p>
          </div>
        </div>
      </section>

      <div
        className={`flex flex-col md:pl-20 md:pr-20 md:gap-20 md:flex-row w-full p-8 ${
          inView1 ? 'fadeIn' : ''
        }`}
        ref={ref1}
      >
        <div className="w-full md:w-[50%]  md:pt-20 ">
          <h2 className="text-2xl font-bold text-center uppercase font-custom">
            Home subscription
          </h2>
          <p className="md:text-lg font-custom mt-2">
            Breathe life into your home with one of our beautiful,
            garden-inspired arrangements delivered to your door weekly,
            biweekly, or monthly. Each design is created in a fresh seasonal
            palette that changes every week.
          </p>
          <p className="md:text-lg font-custom mt-2">
            *With each new floral delivery, we will collect the vessel used from
            the week before - no clutter for you!
          </p>
          <p className="md:text-lg pb-6 font-custom mt-2">
            Interested in signing up? Inquire here, we will reach out to you to
            discuss your subscription details.
          </p>
        </div>
        <div className="relative md:w-[40%] md:mt-7 md:h-[400px] h-[300px]">
          <img
            className="w-full h-full object-cover"
            src="../images/testsubscription.webp"
            alt="White and pink flowers with green stems"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button linkTo="/pages/contact" text="INQUIRE" />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col-reverse md:pl-20 md:pr-20 md:gap-20 md:flex-row w-full p-8 ${
          inView2 ? 'fadeIn' : ''
        }`}
        ref={ref2}
      >
        <div className="relative md:w-[40%] md:mt-7 md:h-[400px] h-[300px]">
          <img
            className="w-full h-full object-cover"
            src="../images/testsubscription2.webp"
            alt="Orange flowers"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button linkTo="/pages/contact" text="INQUIRE" />
          </div>
        </div>
        <div className="w-full md:w-[50%]  md:pt-20 ">
          <h2 className="text-2xl font-bold  uppercase text-center font-custom">
            Business Subscription
          </h2>
          <p className="md:text-lg font-custom mt-2">
            We offer weekly and biweekly business subscriptions.
          </p>
          <p className="md:text-lg font-custom mt-2">
            We will waive all local delivery fees (within a 5 mile radius).
            Pricing is unique to each account and is based on your business’
            specifications. We also offer these unique accounts to interior
            designers looking to compliment their work with fresh flowers.
          </p>
          <p className="md:text-lg pb-6 font-custom mt-2">
            Interested in signing up? Inquire here, we will reach out to you to
            discuss your subscription details.
          </p>
        </div>
      </div>
    </>
  );
}
