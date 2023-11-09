import {useState, useEffect} from 'react';
const Slide = ({review, client}) => (
  <div className="text-center text-black w-[80%] h-40 mx-auto">
    <p className="md:text-2xl font-custom  text-lg ">{review}</p>
    <p className="font-custom md:text-lg ">- {client}</p>
  </div>
);
const Carousel = ({reviews}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((activeIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveIndex((activeIndex - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((activeIndex + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex, reviews.length]);

  return (
    <>
      <div className="flex justify-center mt-10">
        <h2 className="font-customSemiBold  text-1xl md:text-2xl">
          KIND WORDS
        </h2>
      </div>
      <div className="relative md:w-[70%] h-40 overflow-hidden flex justify-center items-center mx-auto">
        <button onClick={prevSlide} className="p-2" aria-label="PreviousSlide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        {reviews.map(
          (review, index) =>
            index === activeIndex && (
              <Slide
                key={index}
                review={review.review}
                client={review.client}
              />
            ),
        )}
        <button onClick={nextSlide} className="p-2" aria-label="NextSlide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Carousel;
