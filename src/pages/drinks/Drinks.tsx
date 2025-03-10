import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mainContext } from "../../context/MainProvider";

const Drinks = () => {
  const myCategory = useParams()
  console.log(myCategory)

    const {setCategory} = useContext(mainContext) as any

  useEffect(()=> {
    setCategory(myCategory.farid)
    
  }, [myCategory.farid])
  
    return ( 
        <>
        </>
     );
}
 
export default Drinks;