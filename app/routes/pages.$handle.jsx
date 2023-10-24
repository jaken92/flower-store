import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import AboutPage from '~/components/AboutPage';

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

  return (
    <>
      {console.log(page.handle)}
      {page.handle === 'about' ? (
        <AboutPage dangerouslySetInnerHTML={{__html: page.body}} />
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
