// ContactFormHandler.server.jsx
import {json, LoaderFunction} from 'remix';
// import mailjet from 'node-mailjet';

export const loader = async ({request, context}) => {
  if (request.method !== 'POST') {
    //   return json(
    //     {status: 'error', message: 'Only POST requests are allowed'},
    //     {status: 405},
    //   );
    // }

    const formData = await new Response(request).formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    console.log(name);

    //   try {
    //     await sendEmail(name, email, message);
    //     return json({status: 'success', message: 'Email sent successfully'});
    //   } catch (error) {
    //     console.error(error);
    //     return json(
    //       {status: 'error', message: 'Failed to send email'},
    //       {status: 500},
    //     );
    //   }
  }
};
// async function sendEmail(name, email, message) {
//   const mailjetClient = mailjet.connect(
//     process.env.MAILJET_API_KEY,
//     process.env.MAILJET_SECRET_KEY,
//   );

//   await mailjetClient.post('send', {version: 'v3.1'}).request({
//     Messages: [
//       {
//         From: {Email: 'your-email@example.com', Name: 'Your Name'},
//         To: [{Email: 'receiver-email@example.com', Name: 'Receiver Name'}],
//         Subject: 'Contact Form Submission',
//         TextPart: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//       },
//     ],
//   });
// }
