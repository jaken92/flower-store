/**
 * A side bar component with Overlay that works without JavaScript.
 * @example
 * ```jsx
 * <Aside id="search-aside" heading="SEARCH">
 *  <input type="search" />
 *  ...
 * </Aside>
 * ```
 */

import React, {useState, useEffect} from 'react';
export function Aside({children, heading, id = 'aside'}) {
  // const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   // Update the viewport width when the window is resized
  //   const handleResize = () => {
  //     setViewportWidth(window.innerWidth);
  //   };

  //   // Add event listener for window resize
  //   window.addEventListener('resize', handleResize);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []); // Empty dependency array ensures the effect runs once after initial render

  // const maxWidth = 768; // Set your desired maximum width
  // const shouldApplyStyles = viewportWidth < maxWidth;

  return (
    <div aria-modal className="overlay" id={id} role="dialog">
      <button
        className="close-outside"
        onClick={() => {
          history.go(-1);
          window.location.hash = '';
        }}
      />
      <aside>
        <header>
          <h3>{heading}</h3>
          <CloseAside />
        </header>

        <main>{children}</main>
      </aside>
    </div>
  );
}

function CloseAside() {
  return (
    /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
    <a className="close" href="#" onChange={() => history.go(-1)}>
      &times;
    </a>
  );
}
