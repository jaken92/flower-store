import {useEffect} from 'react';
import {useLocation} from '@remix-run/react';

function ScrollLogger({headerColorChanger}) {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
    if (
      location.pathname != '/' &&
      location.pathname != '/pages/about' &&
      location.pathname != '/pages/weddings' &&
      location.pathname != '/pages/subscriptions'
    ) {
      headerColorChanger(true);
    }
  }, [location, headerColorChanger]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDistance = window.scrollY;
      if (scrollDistance > 25) {
        headerColorChanger(true);
      }
      if (scrollDistance < 25) {
        headerColorChanger(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerColorChanger]);

  return <div></div>;
}

export default ScrollLogger;
