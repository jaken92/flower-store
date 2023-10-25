import React, {useEffect} from 'react';

function ScrollLogger({headerColorChanger}) {
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

    // // Clean up the event listener when the component is unmounted
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, [headerColorChanger]);

  return <div></div>;
}

export default ScrollLogger;
