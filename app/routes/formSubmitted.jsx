import {Link} from '@remix-run/react';

export default function formSubmitted() {
  return (
    <div className="w-screen flex flex-col items-center mt-[100px]">
      <img
        className="w-1/3 h-1/2"
        src="../images/MouaLogo.png"
        alt="moua-logo"
      ></img>
      <h2>Your form was succesfully sent!</h2>
      <h2> Thank you for considering Mouaflowers!</h2>
      <h2>We will make sure to answer your request as soon as possible!</h2>

      <Link to="/">
        <button className="py-3 px-5 hover:bg-pink text-sm font-medium text-center border border-black text-black bg-teal rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
          Back to Startpage
        </button>
      </Link>
    </div>
  );
}
