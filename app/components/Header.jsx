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
          src="../images/icons/smallColorLogo.png"
          alt="cart-logo"
        ></img>
      </NavLink>
      <HeaderMenu menu={menu} viewport="desktop" />
      <HeaderCtas
        isLoggedIn={isLoggedIn}
        whiteHeader={whiteHeader}
        cart={cart}
      />
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
      {menu.items.map((item) => {
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

function HeaderCtas({cart, whiteHeader}) {
  return (
    <nav className="header-ctas" role="navigation">
      <CartToggle cart={cart} whiteHeader={whiteHeader} />
      <HeaderMenuMobileToggle />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  return (
    <a className="header-menu-mobile-toggle" href="#mobile-menu-aside">
      <h3 className="pt-0 pb-1 text-2xl">☰</h3>
    </a>
  );
}

function CartBadge({count, whiteHeader}) {
  return (
    <a href="#cart-aside">
      <div className="flex flex-row">
        <svg
          className="cartSvg"
          fill="none"
          height="25"
          viewBox="0 0 24 24"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            className="cartSvg"
            fill={`${whiteHeader ? 'black' : 'white'}`}
            style={{transition: 'fill 0.3s ease-out'}}
          >
            <path d="m2.08416 2.7512c.13739-.39076.56554-.59617.95631-.45878l.3014.10596c.61652.21673 1.14016.40081 1.55224.60301.44063.2162.81848.48254 1.10266.8984.28198.41264.3984.86536.45213 1.36174.02405.2222.03674.46814.04343.73847h10.63817c1.685 0 3.2018 0 3.6457.57708.444.57709.2704 1.44661-.0767 3.18567l-.4998 2.42475c-.3151 1.5289-.4727 2.2933-1.0244 2.7429s-1.3322.4496-2.8932.4496h-5.3029c-2.78892 0-4.18337 0-5.04977-.9138-.86641-.9139-.92964-1.8846-.92964-4.8262v-2.60168c0-.73995-.00102-1.23516-.04218-1.61537-.03933-.36335-.10903-.54477-.19929-.67686-.08806-.12886-.22173-.24929-.52496-.39807-.32284-.15841-.76159-.31396-1.4292-.54868l-.26121-.09184c-.39077-.13738-.59617-.56553-.45879-.9563z" />
            <path d="m7.5 18c.82843 0 1.5.6716 1.5 1.5s-.67157 1.5-1.5 1.5-1.5-.6716-1.5-1.5.67157-1.5 1.5-1.5z" />
            <path d="m16.5 18.0001c.8284 0 1.5.6715 1.5 1.5 0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5c0-.8285.6716-1.5 1.5-1.5z" />
          </g>
        </svg>
        <p>{`Cart(${count})`}</p>
      </div>
    </a>
  );
}

function CartToggle({cart, whiteHeader}) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge whiteHeader={whiteHeader} count={0} />;
          return (
            <CartBadge
              whiteHeader={whiteHeader}
              count={cart.totalQuantity || 0}
            />
          );
        }}
      </Await>
    </Suspense>
  );
}

// const FALLBACK_HEADER_MENU = {
//   id: 'gid://shopify/Menu/199655587896',
//   items: [
//     {
//       id: 'gid://shopify/MenuItem/461609500728',
//       resourceId: null,
//       tags: [],
//       title: 'Collections',
//       type: 'HTTP',
//       url: '/collections',
//       items: [],
//     },
//     {
//       id: 'gid://shopify/MenuItem/461609533496',
//       resourceId: null,
//       tags: [],
//       title: 'Blog',
//       type: 'HTTP',
//       url: '/blogs/journal',
//       items: [],
//     },
//     {
//       id: 'gid://shopify/MenuItem/461609566264',
//       resourceId: null,
//       tags: [],
//       title: 'Policies',
//       type: 'HTTP',
//       url: '/policies',
//       items: [],
//     },
//     {
//       id: 'gid://shopify/MenuItem/461609599032',
//       resourceId: 'gid://shopify/Page/92591030328',
//       tags: [],
//       title: 'About',
//       type: 'PAGE',
//       url: '/pages/about',
//       items: [],
//     },
//   ],
// };

function activeLinkStyle({isActive}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
  };
}
