import { Link } from "react-router-dom";
import { ICard } from "../../interfaces/Interface";
import "./itemCard.css"

const ItemCard = ({path,linkText,color}:ICard) => {
    return (

        <div className={`bg-${color} py-15 px-5 flex flex-col items-start justify-center rounded-sm transition ease-in-out  hover:text-dark-blue `}>
            <Link className="text-3xl" to={path}>{linkText}</Link>
            <p className="text-[0.6rem] font-[Mont] ">random text</p>
        </div>
     );
}
 
export default ItemCard;