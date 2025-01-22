import { Link } from "react-router-dom";
const Card = ({
  title,
  subtitle,
  cardColor,
  buttonText,
  buttonFGColor,
  buttonBGColor,
  buttonBGColorHover,
  href,
}) => {
  return (
    <div className={`${cardColor} p-6 rounded-lg shadow-md`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{subtitle}</p>
      <Link
        to={href}
        className={`inline-block ${buttonBGColor} ${buttonFGColor} rounded-lg px-4 py-2 hover:${buttonBGColorHover}`}
      >
        {buttonText}
      </Link>
    </div>
  );
};
export default Card;
