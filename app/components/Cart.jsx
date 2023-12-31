import {CartForm, Image, Money} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import {useVariantUrl} from '~/utils';
import {useState, useEffect, useRef} from 'react';

export function CartMain({layout, cart}) {
  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  // const withDiscount =
  //   cart &&
  //   Boolean(cart.discountCodes.filter((code) => code.applicable).length);
  // const className = `cart-main ${withDiscount ? 'with-discount' : ''}`;

  return (
    <div className="cart-main">
      <CartEmpty hidden={linesCount} layout={layout} />
      <CartDetails cart={cart} layout={layout} />
    </div>
  );
}

function CartDetails({layout, cart}) {
  const cartHasItems = !!cart && cart.totalQuantity > 0;

  return (
    <div className="cart-details">
      <CartLines lines={cart?.lines} layout={layout} />
      <NoteForm notes={cart?.notes} />
      {cartHasItems && (
        <CartSummary cost={cart.cost} layout={layout}>
          {/* <CartDiscounts discountCodes={cart.discountCodes} /> */}
          <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
        </CartSummary>
      )}
    </div>
  );
}

function CartLines({lines, layout}) {
  if (!lines) return null;

  return (
    <div className="custom-font  text-gray-600 " aria-labelledby="cart-lines">
      <ul>
        {lines.nodes.map((line) => (
          <CartLineItem key={line.id} line={line} layout={layout} />
        ))}
      </ul>
    </div>
  );
}

function CartLineItem({layout, line}) {
  const {id, merchandise} = line;
  const {product, title, image, selectedOptions} = merchandise;
  const lineItemUrl = useVariantUrl(product.handle, selectedOptions);

  return (
    <li key={id} className="cart-line">
      {image && (
        <Image
          alt={title}
          aspectRatio="1/1"
          data={image}
          height={100}
          loading="lazy"
          width={100}
        />
      )}

      <div>
        <Link
          prefetch="intent"
          to={lineItemUrl}
          onClick={() => {
            if (layout === 'aside') {
              // close the drawer
              window.location.href = lineItemUrl;
            }
          }}
        >
          <p className="font-custom">
            <strong>{product.title}</strong>
          </p>
        </Link>
        <CartLinePrice line={line} as="span" />

        {!selectedOptions.some((option) => option.name == 'Title') && (
          <ul className="font-custom">
            {selectedOptions.map((option) => (
              <li key={option.name}>
                <small className="font-custom">
                  {option.name}: {option.value}
                </small>
              </li>
            ))}
          </ul>
        )}

        <CartLineQuantity line={line} />
      </div>
    </li>
  );
}

function CartCheckoutActions({checkoutUrl}) {
  if (!checkoutUrl) return null;

  return (
    <div>
      <a href={checkoutUrl} target="_self">
        <button className="rounded-2xl font-custom bg-teal border-2  text-gray-600 border-teal p-3 m-3 shadow-md">
          Checkout &rarr;
        </button>
        {/* <p className="font-custom">Continue to Checkout &rarr;</p> */}
      </a>
      <br />
    </div>
  );
}

export function CartSummary({cost, layout, children = null}) {
  const className =
    layout === 'page' ? 'cart-summary-page' : 'cart-summary-aside';

  return (
    <div aria-labelledby="cart-summary" className={className}>
      <div className="cart-subtotal ">
        <div
          className="font-custom ml-3  text-gray-600"
          style={{whiteSpace: 'pre-wrap'}}
        >
          Total:{' '}
        </div>
        <div className="font-custom  text-gray-600">
          {cost?.subtotalAmount?.amount ? (
            <Money data={cost?.subtotalAmount} />
          ) : (
            '-'
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

function CartLineRemoveButton({lineIds}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{lineIds}}
    >
      <small>
        <button
          className="ml-3 rounded-2xl font-custom bg-teal border-2 border-teal p-[4px] text-xs shadow-md active:shadow-none "
          type="submit"
        >
          Remove
        </button>
      </small>
    </CartForm>
  );
}

function CartLineQuantity({line}) {
  if (!line || line?.quantity === 'undefined') return null;
  const {id: lineId, quantity} = line;
  const prevQuantity = Number(Math.max(0, quantity - 1).toFixed(0));
  const nextQuantity = Number((quantity + 1).toFixed(0));

  return (
    <div className="cart-line-quantiy">
      <small>Quantity: {quantity} &nbsp;&nbsp;</small>
      <CartLineUpdateButton lines={[{id: lineId, quantity: prevQuantity}]}>
        <button
          aria-label="Decrease quantity"
          disabled={quantity <= 1}
          name="decrease-quantity"
          value={prevQuantity}
        >
          <span>&#8722; </span>
        </button>
      </CartLineUpdateButton>
      &nbsp;
      <CartLineUpdateButton lines={[{id: lineId, quantity: nextQuantity}]}>
        <button
          aria-label="Increase quantity"
          name="increase-quantity"
          value={nextQuantity}
        >
          <span>&#43;</span>
        </button>
      </CartLineUpdateButton>
      &nbsp;
      <CartLineRemoveButton lineIds={[lineId]} />
    </div>
  );
}

function CartLinePrice({line, priceType = 'regular', ...passthroughProps}) {
  if (!line?.cost?.amountPerQuantity || !line?.cost?.totalAmount) return null;

  const moneyV2 =
    priceType === 'regular'
      ? line.cost.totalAmount
      : line.cost.compareAtAmountPerQuantity;

  if (moneyV2 == null) {
    return null;
  }

  return (
    <div>
      <Money
        className="font-custom"
        withoutTrailingZeros
        {...passthroughProps}
        data={moneyV2}
      />
    </div>
  );
}

export function CartEmpty({hidden = false, layout = 'aside'}) {
  return (
    <div hidden={hidden}>
      <br />
      <p className="ml-3 t text-gray-600 ">
        Looks like you haven&rsquo;t added anything yet, let&rsquo;s get you
        started!
      </p>
      <br />
      <Link
        className="ml-3  text-gray-600 "
        to="/collections"
        onClick={() => {
          if (layout === 'aside') {
            window.location.href = '/collections';
          }
        }}
      >
        Continue shopping →
      </Link>
    </div>
  );
}

// function CartDiscounts({discountCodes}) {
//   const codes =
//     discountCodes
//       ?.filter((discount) => discount.applicable)
//       ?.map(({code}) => code) || [];

//   return (
//     <div>
//       {/* Have existing discount, display it with a remove option */}
//       <dl hidden={!codes.length}>
//         <div>
//           <dt>Discount(s)</dt>
//           <UpdateDiscountForm>
//             <div className="cart-discount">
//               <code>{codes?.join(', ')}</code>
//               &nbsp;
//               <button>Remove</button>
//             </div>
//           </UpdateDiscountForm>
//         </div>
//       </dl>

//       {/* Show an input to apply a discount */}
//       <UpdateDiscountForm discountCodes={codes}>
//         <div>
//           <input type="text" name="discountCode" placeholder="Discount code" />
//           &nbsp;
//           <button type="submit">Apply</button>
//         </div>
//       </UpdateDiscountForm>
//     </div>
//   );
// }

// function UpdateDiscountForm({discountCodes, children}) {
//   return (
//     <CartForm
//       route="/cart"
//       action={CartForm.ACTIONS.DiscountCodesUpdate}
//       inputs={{
//         discountCodes: discountCodes || [],
//       }}
//     >
//       {children}
//     </CartForm>
//   );
// }

function CartLineUpdateButton({children, lines}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesUpdate}
      inputs={{lines}}
    >
      {children}
    </CartForm>
  );
}

//Custom NoteForm to enable user to leave a not with their purchase.
function NoteForm() {
  const [positionLeft, setPositionLeft] = useState(`${6000}px`);
  const [showNote, setShowNote] = useState(false);
  const [saveNote, setSaveNote] = useState(false);
  const [noteUpdated, setNoteUpdated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    }
  }, [isVisible]);

  useEffect(() => {
    if (noteUpdated) {
      setIsVisible(true);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setIsVisible(false);
        setNoteUpdated(false);
      }, 4000);
    }
  }, [noteUpdated]);

  //Workaround for "window is not defined error"
  if (typeof window !== 'undefined') {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    //update windowWidth when window is resized.
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // Remove event listener when the component is unmounted
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useEffect(() => {
      const parent = document.querySelector('aside');
      if (showNote) {
        setPositionLeft(`-${windowWidth - parent.clientWidth}px`);
      } else {
        setPositionLeft(`${6000}px`);
      }
    }, [windowWidth, showNote]);
  }
  function getNoteValues() {
    //workaround for window undefined error.
    if (typeof window !== 'undefined') {
      const parent = document.querySelector('aside');
      setPositionLeft(`-${window.innerWidth - parent.clientWidth}px`);
      setShowNote(!showNote);
    }
  }

  function closeNoteForm() {
    setPositionLeft(`${6000}px`);
    setShowNote(!showNote);
  }

  function saveNoteMessage() {
    setSaveNote(true);
    setNoteUpdated(true);
  }

  return (
    <>
      <p className="font-custom m-3  text-gray-600">
        Add a message to the gift card or write any special requests for your
        order:{' '}
      </p>
      <button
        onClick={getNoteValues}
        className="hover:cursor-pointer rounded-2xl font-custom text-gray-600  bg-teal border-2 border-teal p-3 m-3 shadow-md active:shadow-none"
      >
        {saveNote ? 'Edit Message' : 'Add Message'}
      </button>
      {isVisible && (
        <p className="success m-3  text-gray-600">Note updated successfully!</p>
      )}
      <div
        style={{
          position: 'fixed',
          top: '0px',
          left: positionLeft,
        }}
        className={` h-screen w-screen flex items-center justify-center z-20 bg-black bg-opacity-40`}
      >
        <div className=" bg-pink p-7 rounded-3xl flex flex-col md:h-[500px]  md:w-[500px]">
          <CartForm
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
            className="flex flex-col"
            route="/cart"
            action={CartForm.ACTIONS.NoteUpdate}
          >
            <div className="flex flex-col ">
              <p className="font-custom  text-gray-600">
                Provide a short message for the gift tag:
              </p>
              <textarea
                className="h-[150px] md:h-[300px] rounded-3xl  text-gray-600 font-custom"
                name="note"
              />

              <div className="flex justify-center">
                <button
                  onClick={() => {
                    saveNoteMessage();
                    closeNoteForm();
                  }}
                  className="rounded-2xl font-custom text-gray-600 bg-teal border-2 border-teal p-3 m-3 shadow-md active:shadow-none"
                >
                  Update note
                </button>
              </div>
            </div>
          </CartForm>
        </div>
      </div>
    </>
  );
}
