import {useInView} from 'react-intersection-observer';
export default function AboutPage({
  founder_name,
  occupation,
  intro,
  journey_title,
  journey_text,
  about_moua_text,
  about_moua_title,
}) {
  const {ref: ref1, inView: inView1} = useInView({
    triggerOnce: true,
  });

  const {ref: ref2, inView: inView2} = useInView({
    triggerOnce: true,
  });

  //using regex to convert linebreaks to br
  const jorney_text_linebreaks = journey_text.replace(/\n/g, '<br/>');
  const about_moua_text_linebreaks = about_moua_text.replace(/\n/g, '<br/>');
  return (
    <>
      <section className="w-full gap-4">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 sm:p-3">
            <h1 className="text-3xl font-customFancy text-center sm:text-6xl text-gray-600">
              ABOUT
            </h1>
          </div>
          <img
            className="h-[400px] sm:w-full sm:h-screen object-cover"
            src="../images/heroes/aboutHero2.jpg"
            alt="hero for about-page"
          ></img>
        </div>
      </section>
      <div className="flex flex-col md:flex-wrap justify-center items-center md:flex-row w-full p-8 ">
        <img
          className=" md:w-[60%] w-[100%] h-[300px] rounded-full md:h-[400px] object-cover "
          src="../images/mouaAbtImg2.webp"
          alt="person arranging a flowerbouqet on a table in a nice setting"
        />

        <div className="w-full md:pt-15 pt-10 ">
          <h2 className="md:text-3xl  text-gray-600 text-2xl font-bold uppercase text-center font-custom">
            {founder_name}
          </h2>
          <p className="font-custom  text-gray-600  mb-1 text-center md:text-2xl text-1xl uppercase ">
            {occupation}
          </p>
          <div className="flex">
            <p className="font-custom md:pt-6   text-gray-600 md:pl-10 md:pr-10 text-center text-lg md:text-1xl">
              {intro}
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
        <div className="w-full md:w-[50%]  md:pt-5 ">
          <h2 className="md:text-2xl    text-gray-600 text-1xl font-bold  uppercase text-center font-custom">
            {journey_title}
          </h2>
          <p
            className="md:text-lg  text-gray-600 font-custom mt-2"
            dangerouslySetInnerHTML={{__html: jorney_text_linebreaks}}
          ></p>
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
        <div className="w-full md:w-[40%]  text-gray-600  justify-center ">
          <h1 className="md:text-2xl text-1xl uppercase  font-bold mb-4 md:mt-4 text-center font-custom">
            {about_moua_title}
          </h1>
          <p
            className="md:text-lg  text-gray-600 font-custom mt-2"
            dangerouslySetInnerHTML={{__html: about_moua_text_linebreaks}}
          ></p>
        </div>
      </div>
    </>
  );
}
