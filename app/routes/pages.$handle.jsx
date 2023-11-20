import {useLoaderData, useLocation} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import AboutPage from '~/components/AboutPage';
import WeddingsPage from '~/components/WeddingsPage';
import SubscriptionsPage from '~/components/SubscriptionsPage';
import ContactPage from '~/components/ContactPage';

const seo = ({data}) => ({
  title: data?.page?.seo?.title,
  description: data?.page?.seo?.description,
});
export const handle = {
  seo,
};
//action called from contactPage component upon form submission.
export async function action({request, context}) {
  const apiKey = context.env.PUBLIC_MAILJET_API_KEY;
  const secretKey = context.env.SECRET_MAILJET_KEY;

  const formData = await request.formData();

  //trimming whitespace in inputs
  const name = formData.get('name').trim();
  const email = formData.get('email').trim();
  const phonenumber = formData.get('phonenumber').trim();
  const message = formData.get('message').trim();

  const data = {
    Messages: [
      {
        From: {Email: 'jaaakeeen@gmail.com', Name: name},
        To: [{Email: 'petjak0627@skola.goteborg.se', Name: 'Ana Laura'}],
        Subject: 'Inquiry from contact form',
        TextPart: `name: ${name} email: ${email} phone: ${phonenumber} message: ${message}`,
        HTMLPart: `
          <h3>Message from: ${name}</h3>
          <h3>Email: ${email}</h3>
          <h3>Phone-number: ${phonenumber}</h3>
          <p>Message: ${message}</p>

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

  //response string for prod url
  const url = new URL(request.url);
  //`${url.protocol}//${url.hostname}/formSubmitted`
  return Response.redirect('/formSubmitted');
  // return Response.redirect('http://localhost:3000/formSubmitted');
}

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

  //About-page props
  const founder_name = page.founder_name ? page.founder_name.value : null;

  const occupation = page.occupation ? page.occupation.value : null;

  const intro = page.intro ? page.intro.value : null;

  const journey_title = page.journey_story_title
    ? page.journey_story_title.value
    : null;

  const journey_text = page.journey_story_text
    ? page.journey_story_text.value
    : null;

  const about_moua_text = page.about_moua_text
    ? page.about_moua_text.value
    : null;

  const about_moua_title = page.about_moua_title
    ? page.about_moua_title.value
    : null;

  //Wedding-page props

  const weddings_entry_text = page.weddings_entry_text
    ? page.weddings_entry_text.value
    : null;

  const weddings_text = page.weddings_text ? page.weddings_text.value : null;

  const weddings_title = page.weddings_title ? page.weddings_title.value : null;

  const weddings_contact_title = page.weddings_contact_title
    ? page.weddings_contact_title.value
    : null;

  const weddings_contact_text = page.weddings_contact_text
    ? page.weddings_contact_text.value
    : null;

  //Contact-page props
  const contact_title = page.contact_title ? page.contact_title.value : null;

  const contact_entry_text = page.contact_entry_text
    ? page.contact_entry_text.value
    : null;

  const contact_phone_number = page.contact_phone_number
    ? page.contact_phone_number.value
    : null;

  const contact_location_information = page.contact_location_information
    ? page.contact_location_information.value
    : null;

  const contact_delivery_information = page.contact_delivery_information
    ? page.contact_delivery_information.value
    : null;
  //subscription-page props

  const subscriptions_title = page.subscriptions_title
    ? page.subscriptions_title.value
    : null;

  const subscriptions_discount_one = page.subscriptions_discount_one
    ? page.subscriptions_discount_one.value
    : null;

  const subscriptions_discount_two = page.subscriptions_discount_two
    ? page.subscriptions_discount_two.value
    : null;

  const subscriptions_discount_three = page.subscriptions_discount_three
    ? page.subscriptions_discount_three.value
    : null;

  const subscriptions_discount_four = page.subscriptions_discount_four
    ? page.subscriptions_discount_four.value
    : null;

  const subscriptions_homesub_title = page.subscriptions_homesub_title
    ? page.subscriptions_homesub_title.value
    : null;

  const subscriptions_hometext = page.subscriptions_hometext
    ? page.subscriptions_hometext.value
    : null;

  const subscriptions_business_title = page.subscriptions_business_title
    ? page.subscriptions_business_title.value
    : null;

  const subscriptions_business_text = page.subscriptions_business_text
    ? page.subscriptions_business_text.value
    : null;

  return (
    <>
      {location.pathname === '/pages/about' ? (
        <AboutPage
          content={page.body}
          title={page.title}
          img={page.image}
          founder_name={founder_name}
          occupation={occupation}
          intro={intro}
          journey_title={journey_title}
          journey_text={journey_text}
          about_moua_text={about_moua_text}
          about_moua_title={about_moua_title}
        />
      ) : location.pathname === '/pages/contact' ? (
        <ContactPage
          content={page.body}
          title={page.title}
          contact_title={contact_title}
          contact_entry_text={contact_entry_text}
          contact_phone_number={contact_phone_number}
          contact_location_information={contact_location_information}
          contact_delivery_information={contact_delivery_information}
        />
      ) : location.pathname === '/pages/weddings' ? (
        <WeddingsPage
          content={page.body}
          title={page.title}
          weddings_entry_text={weddings_entry_text}
          weddings_text={weddings_text}
          weddings_title={weddings_title}
          weddings_contact_title={weddings_contact_title}
          weddings_contact_text={weddings_contact_text}
        />
      ) : location.pathname === '/pages/subscriptions' ? (
        <SubscriptionsPage
          content={page.body}
          title={page.title}
          subscriptions_title={subscriptions_title}
          subscriptions_discount_one={subscriptions_discount_one}
          subscriptions_discount_two={subscriptions_discount_two}
          subscriptions_discount_three={subscriptions_discount_three}
          subscriptions_discount_four={subscriptions_discount_four}
          subscriptions_homesub_title={subscriptions_homesub_title}
          subscriptions_hometext={subscriptions_hometext}
          subscriptions_business_title={subscriptions_business_title}
          subscriptions_business_text={subscriptions_business_text}
        />
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
        founder_name: metafield(namespace: "custom", key: "founder_name") {
          value
          type
          description
        }
        occupation: metafield(namespace: "custom", key: "occupation") {
          value
          type
          description
        }
        journey_story_title: metafield(namespace: "custom", key: "journey_story_title") {
          value
          type
          description
        }
        journey_story_text: metafield(namespace: "custom", key: "journey_story_text") {
          value
          type
          description
        }
        intro: metafield(namespace: "custom", key: "intro") {
          value
          type
          description
        }
        about_moua_text: metafield(namespace: "custom", key: "about_moua_text") {
          value
          type
          description
        }
        about_moua_title: metafield(namespace: "custom", key: "about_moua_title") {
          value
          type
          description
        }
        weddings_entry_text: metafield(namespace: "custom", key: "weddings_entry_text") {
          value
          type
          description
        }
        weddings_text: metafield(namespace: "custom", key: "weddings_text") {
          value
          type
          description
        }
        weddings_title: metafield(namespace: "custom", key: "weddings_title") {
          value
          type
          description
        }
        weddings_contact_title: metafield(namespace: "custom", key: "weddings_contact_title") {
          value
          type
          description
        }
        weddings_contact_text: metafield(namespace: "custom", key: "weddings_contact_text") {
          value
          type
          description
        }
        contact_title: metafield(namespace: "custom", key: "contact_title") {
          value
          type
          description
        }
        contact_entry_text: metafield(namespace: "custom", key: "contact_entry_text") {
          value
          type
          description
        }
        contact_phone_number: metafield(namespace: "custom", key: "contact_phone_number") {
          value
          type
          description
        }
        contact_location_information: metafield(namespace: "custom", key: "contact_location_information") {
          value
          type
          description
        }
        contact_delivery_information: metafield(namespace: "custom", key: "contact_delivery_information") {
          value
          type
          description
        }
        subscriptions_title: metafield(namespace: "custom", key: "subscriptions_title") {
          value
          type
          description
        }
        subscriptions_discount_one: metafield(namespace: "custom", key: "subscriptions_discount_one") {
          value
          type
          description
        }
        subscriptions_discount_two: metafield(namespace: "custom", key: "subscriptions_discount_two") {
          value
          type
          description
        }
        subscriptions_discount_three: metafield(namespace: "custom", key: "subscriptions_discount_three") {
          value
          type
          description
        }
        subscriptions_discount_four: metafield(namespace: "custom", key: "subscriptions_discount_four") {
          value
          type
          description
        }
        subscriptions_homesub_title: metafield(namespace: "custom", key: "subscriptions_homesub_title") {
          value
          type
          description
        }
        subscriptions_hometext: metafield(namespace: "custom", key: "subscriptions_hometext") {
          value
          type
          description
        }
        subscriptions_business_title: metafield(namespace: "custom", key: "subscriptions_business_title") {
          value
          type
          description
        }
        subscriptions_business_text: metafield(namespace: "custom", key: "subscriptions_business_text") {
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
