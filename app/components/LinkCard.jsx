import {Link} from '@remix-run/react';

//component to render the three link-cards that are displayed in the _index.jsx
export default function LinkCard({text, btnText, imageSrc, linkTo}) {
  return (
    <div className="relative">
      <img
        className="md:h-[500px] md:w-[500px] object-cover"
        src={imageSrc}
        alt={text}
      />
      <div className="absolute gap-2 top-0 left-0 w-full h-full flex flex-col justify-center items-center ">
        <p className="text-white  p-1 bg-black rounded bg-opacity-30 font-custom ">
          {text}
        </p>
        <button className="bg-pink hover:bg-transparent hover:text-white text-black font-custom  border-2  border-pink font-bold py-2 px-4 rounded">
          <Link to={linkTo}> {btnText}</Link>
        </button>
      </div>
    </div>
  );
}
