import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mainContext } from "../../context/MainProvider";
import ItemSpecifics from "../../components/itemSpecifics/ItemSpecifics";

const Drinks = () => {
  const myCategory = useParams()

    const {setCategory, drinks, bgColor} = useContext(mainContext) as any

  useEffect(()=> {
    setCategory(myCategory.farid)
    
  }, [myCategory.farid])
  
    return ( 
        <section className={`grid grid-cols-2 gap-5 px-10 p-20 md:grid-cols-3 md:gap-5 bg-${bgColor}`}>
          {drinks.map((drink:any)=>{
            return(
              
                <ItemSpecifics linkText={drink.
                  strDrinkThumb} path="" name={drink.strDrink}/>
        
            )
          })}
        </section>
     );
}
 
export default Drinks;