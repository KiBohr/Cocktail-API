import { Link } from "react-router-dom";
import { ISpecifics } from "../../interfaces/Interface";


const ItemSpecifics = ({linkText,path,name}:ISpecifics) => {
    
    return (
        <div className="flex gap-1 items-center w-[40%] h-[40%] md:w-[50%] md:h-[50%] transition ease-in-out hover:text-light-blue">
            <Link to={path}><div className="h-45 w-45 md:h-60 md:w-60 rounded-sm overflow-hidden transition ease-in-out hover:opacity-80"><img className="object-cover" src={linkText} alt={name} /></div></Link>
            <p className="font-[Mont] font-semibold rotate-270 ">{name}</p>
        </div>
     );
}
 
export default ItemSpecifics;