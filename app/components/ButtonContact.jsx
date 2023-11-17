import {Link} from '@remix-run/react';

const Button = ({linkTo, text}) => {
  return (
    <Link
      to={linkTo}
      className="bg-white hover:bg-transparent hover:text-white text-lg font-custom  border-2  border-white text-black font-bold py-2 px-4 "
    >
      {text}
    </Link>
  );
};

export default Button;
