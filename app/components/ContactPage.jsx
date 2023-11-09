import {Form} from '@remix-run/react';

export default function MyForm() {
  return (
    <Form className="mt-[200px]" method="post">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Name
        </label>
        <input
          type="name"
          name="name"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Your name"
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
          type="email"
          name="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="number"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Phone number
        </label>
        <input
          type="tel"
          name="number"
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder=""
          pattern="[0-9\-]*"
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
          name="message"
          rows="6"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      {/* submit goes by default to action in parent */}
      <button type="submit">Submit</button>
    </Form>
  );
}

// import {useLoaderData} from '@remix-run/react';
// import {Header, HeaderMenu} from '~/components/Header';

// export default function ContactPage({content, title}) {

//   return (
//     <section className="bg-white dark:bg-gray-900">
//       <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//         <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
//           Contact Us
//         </h2>
//         <p className="mb-2 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
//           Want to talk with someone directly? Feel free to call or DM us through
//           our social media . Our current hours are Monday - Saturday, 10AM -
//           19:00PM.
//         </p>
//         <p className="lg:mb-16 font-light  text-gray-500 dark:text-gray-400 sm:text-xl">
//           Number: (+46) 076. 748. 7401
//           <br></br>
//           Location: Göteborg, Sweden Högsbo 41111
//           <br></br>
//           PICK-UP + DELIVERIES: MONDAY - FRIDAY
//         </p>
//         <form
//           // onSubmit={onSubmitform}
//           // id="contactForm"
//           className="space-y-8"
//           action="/contactForm"
//           method="POST"
//         >
//           <div>
//             <label
//               htmlFor="name"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Name
//             </label>
//             <input
//               type="name"
//               id="name"
//               className="shadow-sm bg-pink border border-black text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//               placeholder="Your name"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="email"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Email *
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="shadow-sm bg-pink border border-black text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//               placeholder="name@flowbite.com"
//               required
//             />
//           </div>
//           <div>
//             <label
//               htmlFor="number"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//             >
//               Phone number
//             </label>
//             <input
//               type="tel"
//               id="number"
//               className="block p-3 w-full text-sm  text-black bg-pink rounded-lg border border-black shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
//               placeholder=""
//               pattern="[0-9\-]*"
//             />
//           </div>
//           <div className="sm:col-span-2">
//             <label
//               htmlFor="message"
//               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
//             >
//               Your message
//             </label>
//             <textarea
//               id="message"
//               rows="6"
//               className="block p-2.5 w-full text-sm text-black bg-pink rounded-lg shadow-sm border border-black focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
//               placeholder="Leave a comment..."
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="py-3 px-5 hover:bg-pink text-sm font-medium text-center border border-black text-black bg-teal rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//           >
//             Send message
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
