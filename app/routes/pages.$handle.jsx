import {useLoaderData, useLocation} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import AboutPage from '~/components/AboutPage';
import WeddingsPage from '~/components/WeddingsPage';
import SubscriptionsPage from '~/components/SubscriptionsPage';
import ContactPage from '~/components/ContactPage';

//dont forget to send SEO(see collections)
export async function loader({params, context}) {
  const {handle} = params;
  const {page} = await context.storefront.query(PAGE_QUERY, {
    variables: {
      handle,
    },
  });
  console.log(context.env.PUBLIC_MAILJET_API_KEY);
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
  console.log(location);
  return (
    <>
      {location.pathname === '/pages/about' ? (
        <AboutPage content={page.body} title={page.title} img={page.image} />
      ) : location.pathname === '/pages/contact' ? (
        <ContactPage
          content={page.body}
          title={page.title}
          context={context.env.PUBLIC_MAILJET_API_KEY}
        />
      ) : location.pathname === '/pages/weddings' ? (
        <WeddingsPage content={page.body} title={page.title} />
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
