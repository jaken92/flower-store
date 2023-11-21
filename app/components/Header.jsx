import {Await, NavLink, useMatches} from '@remix-run/react';
import {Suspense} from 'react';
import {useState, useEffect} from 'react';
import ScrollTracker from '~/components/ScrollTracker';

export function Header({header, isLoggedIn, cart}) {
  const {menu} = header;
  const [whiteHeader, setWhiteHeader] = useState(false);

  //updating the WhiteHeader state to apply/remove css class to header-element.
  function headerColorChanger(trueOrFalse) {
    setWhiteHeader(trueOrFalse);
  }

  return (
    <header className={`header ${whiteHeader ? 'white-header' : ''}`}>
      <ScrollTracker headerColorChanger={headerColorChanger} />
      <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
        <img
          className="h-[80px] w-auto opacity-100"
          src="../images/MouaLogo.png"
          alt="cart-logo"
        ></img>
      </NavLink>
      <HeaderMenu menu={menu} viewport="desktop" />
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
    </header>
  );
}

export function HeaderMenu({menu, viewport}) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;
  const className = `header-menu-${viewport}`;

  function closeAside(event) {
    if (viewport === 'mobile') {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={closeAside}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        ></NavLink>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain)
            ? new URL(item.url).pathname
            : item.url;

        // Conditionally render a div or NavLink based on the length of item.items
        const navMenu =
          item.items && item.items.length > 0 ? (
            // Render a div if item has sub-items
            <div
              className="header-menu-item sub-toggler"
              onClick={() => {
                if (viewport === 'mobile') {
                  setIsDropdownVisible(!isDropdownVisible);
                }
              }}
              key={item.id}
            >
              {viewport === 'mobile' ? (
                <h2>{item.title + `${isDropdownVisible ? ' -' : ' +'}`}</h2>
              ) : (
                <h2>{item.title}</h2>
              )}

              <div
                className={`submenu-wrapper ${
                  isDropdownVisible ? 'shown' : ''
                }`}
              >
                {item.items.map((submenu) => {
                  if (!submenu.url) return null;

                  const submenuUrl =
                    submenu.url.includes('myshopify.com') ||
                    submenu.url.includes(publicStoreDomain)
                      ? new URL(submenu.url).pathname
                      : submenu.url;
                  return (
                    <h3 key={submenu.id}>
                      <NavLink
                        className="submenu-item"
                        onClick={closeAside}
                        prefetch="intent"
                        style={activeLinkStyle}
                        to={submenuUrl}
                      >
                        {submenu.title}
                      </NavLink>
                    </h3>
                  );
                })}
              </div>
            </div>
          ) : (
            // Render a NavLink if item does not have sub-items
            <NavLink
              className="header-menu-item"
              end
              key={item.id}
              onClick={closeAside}
              prefetch="intent"
              style={activeLinkStyle}
              to={url}
            >
              {item.title}
            </NavLink>
          );

        return navMenu;
      })}
    </nav>
  );
}

function HeaderCtas({cart}) {
  return (
    <nav className="header-ctas" role="navigation">
      <CartToggle cart={cart} />
      <HeaderMenuMobileToggle />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  return (
    <a className="header-menu-mobile-toggle" href="#mobile-menu-aside">
      <h3 className="text-2xl">☰</h3>
    </a>
  );
}

// function SearchToggle() {
//   return <a href="#search-aside">Search</a>;
// }

function CartBadge({count}) {
  return (
    <a href="#cart-aside">
      <div className="flex flex-row">
        <img
          className="h-[25px] w-[25px]"
          src="../images/cartSymbol.png"
          alt="cart-logo"
        ></img>
        <p>{`Cart(${count})`}</p>
      </div>
    </a>
  );
}

function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    // color: isPending ? 'white' : 'white',
  };
}
