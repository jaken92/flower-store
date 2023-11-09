import {Form} from '@remix-run/react';

//single page for contact without rendering it as a component. Not used, saved for back
export async function action({request, context}) {
  const apiKey = context.env.PUBLIC_MAILJET_API_KEY;
  const secretKey = context.env.SECRET_MAILJET_KEY;
  console.log('Action component called');

  const formData = await request.formData();

  const data = {
    Messages: [
      {
        From: {Email: 'jaaakeeen@gmail.com', Name: formData.get('name')},
        To: [{Email: 'petjak0627@skola.goteborg.se', Name: 'Ana Laura'}],
        Subject: 'Inquiry from contact form',
        TextPart: `name: ${formData.get('name')} email: ${formData.get(
          'email',
        )} phone: ${formData.get('number')} message: ${formData.get(
          'message',
        )}`,
        HTMLPart: `
          <h3>Message from: ${formData.get('name')}</p>
          <h3>Email: ${formData.get('email')}</p>
          <h3>Phone-number: ${formData.get('number')}</p>
          <p>Message: ${formData.get('message')}</p>

        `,
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
