import {useLoaderData, useLocation} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import AboutPage from '~/components/AboutPage';
import WeddingsPage from '~/components/WeddingsPage';
import SubscriptionsPage from '~/components/SubscriptionsPage';
import ContactPage from '~/components/ContactPage';

//action only used from contactPage component

export async function action({request, context}) {
  const apiKey = context.env.PUBLIC_MAILJET_API_KEY;
  const secretKey = context.env.SECRET_MAILJET_KEY;

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

//dont forget to send SEO(see collections)
export async function loader({params, context}) {
  const {handle} = params;
  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle,
    },
  });

  if (!page) {
    throw new Response(null, {status: 404});
  }

  return json({
    page,
  });
}

export default function Page() {
  const {page} = useLoaderData();
  const location = useLocation();

  const secondaryContent = page.secondaryField
    ? page.secondaryField.value
    : null;

  return (
    <>
      {location.pathname === '/pages/about' ? (
        <AboutPage
          content={page.body}
          title={page.title}
          img={page.image}
          secondaryContent={secondaryContent}
        />
      ) : location.pathname === '/pages/contact' ? (
        <ContactPage content={page.body} title={page.title} />
      ) : location.pathname === '/pages/weddings' ? (
        <WeddingsPage
          content={page.body}
          title={page.title}
          secondaryContent={secondaryContent}
        />
      ) : location.pathname === '/pages/subscriptions' ? (
        <SubscriptionsPage content={page.body} title={page.title} />
      ) : (
        <div
          dangerouslySetInnerHTML={{__html: page.body}}
          className="prose dark:prose-invert"
        />
      )}
    </>
  );
}

const PAGE_QUERY = `#graphql
    query PageDetails($language: LanguageCode, $handle: String!)
    @inContext(language: $language) {
      page(handle: $handle) {
        secondaryField: metafield(namespace: "custom", key: "secondaryfield") {
          value
          type
          description
        }
        id
        title
        body
      
         seo {
          description
          title
      
      }
    }
    }
  `;
