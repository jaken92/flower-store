// import {json} from '@shopify/remix-oxygen';
// import {redirect} from '@shopify/remix-oxygen';
import {Form} from '@remix-run/react';
// import {ActionFunction} from '@shopify/remix-oxygen';

// export async function action({request, context}) {
//   const apiKey = context.env.PUBLIC_MAILJET_API_KEY;
//   const secretKey = context.env.SECRET_MAILJET_KEY;
//   console.log(secretKey);
//   console.log(apiKey);
//   const formData = await request.formData();
//   const email = formData.get('email');
//   console.log(email);
//   console.log(apiKey);
//   // console.log(formData);

//   const data = Object.fromEntries(formData);
//   // console.log(JSON.stringify(data));
//   // const response = await fetch('https://api.example.com/submit', {
//   //   method: 'POST',
//   //   headers: {
//   //     'Content-Type': 'Header',
//   //   },
//   //   body: JSON.stringify(data),
//   // });
//   // return response.json();
//   return null;
// }

export async function action({request, context}) {
  const apiKey = context.env.PUBLIC_MAILJET_API_KEY;
  const secretKey = context.env.SECRET_MAILJET_KEY;

  const formData = await request.formData();

  const data = {
    Messages: [
      {
        From: {Email: 'jaaakeeen@gmail.com', Name: 'Sender'},
        To: [{Email: formData.get('email'), Name: formData.get('name')}],
        Subject: 'Hello',
        TextPart: 'Hello, this is the email content.',
        HTMLPart: '<h1>Hello, this is the email content.</h1>',
      },
    ],
  };

  const response = await fetch('https://api.mailjet.com/v3.1/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(`${apiKey}:${secretKey}`)}`,
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  console.log(responseData);

  return responseData;
}

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
      <button type="submit">Submit</button>
    </Form>
  );
}
