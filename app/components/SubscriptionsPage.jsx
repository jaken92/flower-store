import Button from './ButtonContact';

import {useInView} from 'react-intersection-observer';

export default function SubscriptionsPage({
  subscriptions_title,
  subscriptions_discount_one,
  subscriptions_discount_two,
  subscriptions_discount_three,
  subscriptions_discount_four,
  subscriptions_homesub_title,
  subscriptions_hometext,
  subscriptions_business_title,
  subscriptions_business_text,
}) {
  //Two Intersection Observers of two different divs, inView boolean to decide if the div is in view or not
  const {ref: ref1, inView: inView1} = useInView({
    triggerOnce: true,
  });

  const {ref: ref2, inView: inView2} = useInView({
    triggerOnce: true,
  });

  //using regex to convert linebreaks to br
  const subscriptions_hometext_linebreaks = subscriptions_hometext.replace(
    /\n/g,
    '<br/>',
  );

  const subscriptions_business_text_linebreaks =
    subscriptions_business_text.replace(/\n/g, '<br/>');
  return (
    <>
      <section className="md:w-full gap-4">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 sm:p-3">
            <h1 className="text-3xl font-customFancy text-center sm:text-6xl text-gray-600">
              SUBSCRIPTIONS
            </h1>
          </div>
          <img
            loading="lazy"
            className="h-[400px] sm:w-full sm:h-screen object-cover"
            src="../images/heroes/subscriptionsHero.jpg"
            alt="subscriptionpage-hero, flowers in different shapes and colors"
          ></img>
        </div>
      </section>
      <h2 className="font-custom text-2xl  p-4 text-gray-600 uppercase text-center mb-5 mt-5 md:mt-10">
        {subscriptions_title}
      </h2>

      <section className="flex justify-center  ">
        <div className="flex p-5 md:flex-row flex-col gap-10 ">
          <div className="flex bg-white  text-gray-600 p-5 md:flex-col md:w-[50%] text-center justify-center border border-black">
            <p className="font-custom md:text-2xl ">
              {subscriptions_discount_one}
            </p>
            <p className="font-custom  md:text-2xl md:pt-4">
              {subscriptions_discount_two}
            </p>
          </div>
          <div className="flex bg-white  text-gray-600 p-5 md:flex-col md:w-[50%] text-center justify-center border md:p-4 border-black">
            <p className="font-custom md:text-2xl ">
              {subscriptions_discount_three}
            </p>
            <p className="font-custom md:text-2xl md:pt-4">
              {subscriptions_discount_four}
            </p>
          </div>
        </div>
      </section>

      <div
        className={`flex flex-col md:pl-20 md:pr-20 md:gap-20 md:flex-row w-full p-6 ${
          inView1 ? 'fadeIn' : ''
        }`}
        ref={ref1}
      >
        <div className="w-full md:w-[50%] pb-4  md:pt-20 ">
          <h2 className="text-2xl  text-gray-600 text-center uppercase font-customSemiBold">
            {subscriptions_homesub_title}
          </h2>
          <p
            className="md:text-lg   text-gray-600 font-custom mt-2"
            dangerouslySetInnerHTML={{
              __html: subscriptions_hometext_linebreaks,
            }}
          ></p>
        </div>
        <div className="relative md:w-[40%] md:mt-7 md:h-[400px] h-[300px]">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src="../images/subscriptionFlowers.webp"
            alt="White and pink flowers with green stems"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button linkTo="/pages/contact" text="INQUIRE" />
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col-reverse md:pl-20 md:pr-20 md:gap-20 md:flex-row w-full p-6 ${
          inView2 ? 'fadeIn' : ''
        }`}
        ref={ref2}
      >
        <div className="relative md:w-[40%]  md:mt-7 md:h-[400px] h-[300px]">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src="../images/subscriptionFlowers2.webp"
            alt="Orange flowers"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button linkTo="/pages/contact" text="INQUIRE" />
          </div>
        </div>
        <div className="w-full  md:w-[50%]  md:pt-20 ">
          <h2 className="text-2xl   text-gray-600 uppercase text-center font-customSemiBold">
            {subscriptions_business_title}
          </h2>
          <p
            className="md:text-lg   text-gray-600 font-custom mt-2"
            dangerouslySetInnerHTML={{
              __html: subscriptions_business_text_linebreaks,
            }}
          ></p>
        </div>
      </div>
    </>
  );
}
