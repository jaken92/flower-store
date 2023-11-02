import {Link} from '@remix-run/react';

//component to render the three link-cards that are displayed in the _index.jsx
export default function ImageLinkComponent({text, btnText, imageSrc, linkTo}) {
  return (
    <div className="relative">
      <img className="image-size" src={imageSrc} alt={text} />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <p className="text-white font-custom">{text}</p>
        <button className="bg-white hover:bg-transparent hover:text-white text-black font-custom  border-2  border-white  font-bold py-2 px-4 rounded">
          <Link to={linkTo}> {btnText}</Link>
        </button>
      </div>
    </div>
  );
}
