import mailjet from 'node-mailjet';

export let loader = async ({request}) => {
  const formData = await new Response(request).formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const mailjetClient = mailjet.connect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_SECRET_KEY,
  );

  await mailjetClient.post('send', {version: 'v3.1'}).request({
    Messages: [
      {
        From: {Email: 'your-email@example.com', Name: 'Your Name'},
        To: [{Email: 'receiver-email@example.com', Name: 'Receiver Name'}],
        Subject: 'Contact Form Submission',
        TextPart: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      },
    ],
  });

  return json({status: 'success', message: 'Email sent successfully'});
};
