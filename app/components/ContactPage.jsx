import {Form} from '@remix-run/react';
import {useEffect, useState} from 'react';

export default function MyForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      {isSubmitted ? (
        <div className="w-screen flex flex-col items-center mt-[100px] p-4">
          <h2>Your form was succesfully sent!</h2>
          <h2> Thank you for considering Mouaflowers!</h2>
          <h2>We will make sure to answer your request as soon as possible!</h2>
          <img className="w-1/3 h-1/3" src="../images/MouaLogo.png"></img>
        </div>
      ) : (
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="mb-2 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Want to talk with someone directly? Feel free to call or DM us
              through our social media . Our current hours are Monday -
              Saturday, 10AM - 19:00PM.
            </p>
            <p className="lg:mb-16 font-light  text-gray-500 dark:text-gray-400 sm:text-xl">
              Number: (+46) 076. 748. 7401
              <br></br>
              Location: Göteborg, Sweden Högsbo 41111
              <br></br>
              PICK-UP + DELIVERIES: MONDAY - FRIDAY
            </p>
            <Form className="space-y-8" method="post">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="name"
                  name="name"
                  className="shadow-sm bg-pink border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Firstname Lastname"
                  autoComplete="name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="shadow-sm bg-pink border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@example.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phonenumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone number(optional)
                </label>
                <input
                  id="phonenumber"
                  type="tel"
                  name="phonenumber"
                  className="shadow-sm bg-pink border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="+46-XXX-XXXXXX"
                  pattern="[0-9\-]*"
                  autoComplete="off"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
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
                  className="shadow-sm bg-pink border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              {/* submit goes by default to action in parent */}
              <button
                onClick={() => setIsSubmitted(true)}
                className="py-3 px-5 hover:bg-pink text-sm font-medium text-center border border-black text-black bg-teal rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="submit"
              >
                Submit
              </button>
            </Form>
          </div>
        </section>
      )}
    </>
  );
}
