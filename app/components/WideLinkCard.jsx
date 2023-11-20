import {Link} from '@remix-run/react';

//component to render the three link-cards that are displayed in the _index.jsx
export default function LinkCard({text, btnText, imageSrc, linkTo}) {
  return (
    <div className="relative w-full p-6">
      <img
        className="md:h-[450px] w-[924px] h-[350px] md:w-[1224px] object-cover img-zoom"
        src={imageSrc}
        alt={text}
      />
      <div className="absolute gap-2 top-0 left-0 w-full h-full flex flex-col justify-center items-center ">
        <p className="text-white  p-1 bg-black rounded bg-opacity-30 font-custom ">
          {text}
        </p>
        <button className="bg-white hover:bg-transparent hover:text-white text-black font-custom  border-2  border-white font-bold py-2 px-4 rounded">
          <Link to={linkTo}> {btnText}</Link>
        </button>
      </div>
    </div>
  );
}
