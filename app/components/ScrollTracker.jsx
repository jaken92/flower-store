import {useEffect} from 'react';
import {useLocation} from '@remix-run/react';

//recieving function that is changeing useState in parent component.
function ScrollLogger({headerColorChanger}) {
  // using location to determine header color should be solid or seethrogh.
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.scrollY;

      if (
        location.pathname !== '/' &&
        location.pathname !== '/pages/about' &&
        location.pathname !== '/pages/weddings' &&
        location.pathname !== '/pages/subscriptions'
      ) {
        headerColorChanger(true);
      } else {
        headerColorChanger(scrollDistance > 25);
      }
    };

    //call once to evaluate pathname
    handleScroll();

    //call on scroll to determine if user is at the top of page.
    window.addEventListener('scroll', handleScroll);

    // Remove eventlistener when unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location, headerColorChanger]);

  return null;
}

export default ScrollLogger;
