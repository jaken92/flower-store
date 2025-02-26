import {Link} from '@remix-run/react';

export default function LinkCard({text, btnText, imageSrc, linkTo}) {
  return (
    <div className="relative flex justify-center items-center mx-auto">
      {' '}
      {/* Add flex and center it */}
      <img
        loading="lazy"
        className="md:h-[450px] w-[350px] h-[400px] md:w-[400px] xl:w-[500px] xl:h-[550px] object-cover img-zoom"
        src={imageSrc}
        alt={text}
      />
      <div className="absolute gap-2 top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <p className="text-white p-1 bg-black rounded bg-opacity-30 font-custom">
          {text}
        </p>
        <button className="bg-white hover:bg-transparent hover:text-white text-black font-custom border-2 border-white font-bold py-2 px-4 rounded">
          <Link to={linkTo}>{btnText}</Link>
        </button>
      </div>
    </div>
  );
}
