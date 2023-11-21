import {Form} from '@remix-run/react';
import {useEffect, useState} from 'react';

export default function MyForm({
  contact_title,
  contact_entry_text,
  contact_phone_number,
  contact_location_information,
  contact_delivery_information,
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      <section className="md:w-full gap-4">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 sm:p-3">
            <h1 className="text-3xl font-customFancy text-center sm:text-6xl text-gray-600">
              CONTACT
            </h1>
          </div>
          <img
            className="h-[400px] sm:w-full sm:h-screen object-cover"
            src="../images/heroes/contactHeroCompressed.jpg"
            alt="hero-image for weddingpage, a copule smiling with a flowerbouqeut in their hands"
          ></img>
        </div>
      </section>
      <section className=" md:mt-20">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-600">
            {contact_title}
          </h2>

          <p className="mb-2  md:mb-3 font-light text-center  text-gray-600 sm:text-xl">
            {contact_entry_text}
          </p>
          <div className="flex flex-col md:mt-10 md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex flex-col">
              <p className=" text-gray-600 md:text-xl ">
                {contact_phone_number}
              </p>
              <p className=" text-gray-600 md:text-xl ">
                {contact_location_information}
              </p>
              <p className=" text-gray-600 md:text-xl  ">
                {contact_delivery_information}
              </p>
            </div>
            <a
              href="https://www.instagram.com/mouaflowerswithcause/"
              aria-label="go to our instagram"
            >
              <img
                src="../images/instagram.svg"
                className="w-8 md:w-10"
                alt="instagram-logo"
              />
            </a>
          </div>

          <Form className="space-y-8" method="post">
            <div>
              <label
                htmlFor="name"
                className="block  text-gray-600 mb-2 text-sm font-medium"
              >
                Name
              </label>
              <input
                id="name"
                type="name"
                name="name"
                className="shadow-sm bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Firstname Lastname"
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium  text-gray-600"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="shadow-sm bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@example.com"
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phonenumber"
                className="block mb-2 text-sm font-medium  text-gray-600"
              >
                Phone number(optional)
              </label>
              <input
                id="phonenumber"
                type="tel"
                name="phonenumber"
                className="shadow-sm bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="+46-XXX-XXXXXX"
                pattern="[0-9\-]*"
                autoComplete="off"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm  text-gray-600 font-medium "
              >
                Your message
              </label>
              <textarea
                id="message"
                type="text"
                autoComplete="off"
                name="message"
                required
                rows="6"
                className="shadow-sm bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            {/* submit goes by default to action in parent */}
            <button
              onClick={() => setIsSubmitted(true)}
              className="py-3 px-5 hover:bg-white  text-gray-600 text-sm font-medium text-center border border-black  bg-teal rounded-lg bg-primary-700 sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300 "
              type="submit"
            >
              Submit
            </button>
          </Form>
        </div>
      </section>
    </>
  );
}
