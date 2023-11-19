import {useMatches, NavLink} from '@remix-run/react';

export function Footer({menu}) {
  return (
    <footer className="footer">
      <FooterMenu menu={menu} />
    </footer>
  );
}

function FooterMenu({menu}) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;
  return (
    <>
      <nav className="footer-menu border-t-2" role="navigation">
        {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
          if (!item.url) return null;
          // if the url is internal, we strip the domain
          const url =
            item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain)
              ? new URL(item.url).pathname
              : item.url;
          const isExternal = !url.startsWith('/');
          return isExternal ? (
            <a
              href={url}
              key={item.id}
              rel="noopener noreferrer"
              target="_blank"
            >
              {item.title}
            </a>
          ) : (
            <NavLink
              end
              key={item.id}
              prefetch="intent"
              to={url}
              style={activeLinkStyle}
            >
              {item.title}
            </NavLink>
          );
        })}
      </nav>
      <div className="flex justify-between  border-t-2 border-black md:mt-24 mt-10 md:pl-10 md:pr-10 ">
        <div className="flex h-14 items-center justify-center gap-3 py-4">
          <img
            src="../images/icons/google-pay.svg"
            alt="google pay"
            className="object-cover w-10 md:h-10 md:w-16"
          />
          <img
            src="../images/icons/apple-pay.svg"
            alt="applepay-logo"
            className="object-cover pr-2 w-8 md:w-12"
          />
          <img
            src="../images/icons/klarna.svg"
            alt="Klarna-logo"
            className="object-cover md:h-6 w-8 md:w-12"
          />
          <img
            src="../images/icons/maestro.svg"
            alt="Maestro-logo"
            className="md:h-12 w-12 md:w-16"
          />
          <img
            src="../images/icons/mastercard.svg"
            alt="Mastercard-logo"
            className="object-cover h-auto w-8 md:w-12"
          />
          <img
            src="../images/icons/visa.svg"
            alt="Visa-logo"
            className="object-cover w-8 md:w-12"
          />
          <img
            src="../images/icons/shoppay.svg"
            alt="Shoppay-logo"
            className="object-cover w-10  md:w-14"
          />
        </div>

        <div
          className="flex justify-end mr-2 gap-2 md:gap-4 
        md:mb-6 pt-4 "
        >
          <a
            href="https://www.instagram.com/mouaflowerswithcause/"
            aria-label="go to instagram-page"
          >
            <img
              src="../images/instagram.svg"
              className="w-6 md:w-8"
              alt="instagram-logo"
            />
          </a>
          <a
            href="https://www.facebook.com/mouaflowerswithcause"
            aria-label="Go to facebook-page"
          >
            <img
              src="../images/facebook.png"
              className=" w-6 md:w-8 "
              alt="facebook-logo"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-end md:pb-4 pr-2 md:pr-6">
        <p className="md:text-sm text-xs">
          © Copyright Moua Flowers,{' '}
          <a href="https://www.shopify.com/">Powered by Shopify</a>
        </p>
      </div>
    </>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}
