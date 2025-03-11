import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const mainContext = createContext({})

const MainProvider = ({children} : {children: React.ReactNode}) => {
    // - hier die usestates, die benötigt werden zum fetchen und für die daten
    const [category, setCategory] = useState<string>("")
    const [drinks, setDrinks] = useState<any>([])
    const [search, setSearch] = useState<string>("")
    const [bgColor, setBgColor] = useState<string>("")



    // - fetchen:

    useEffect(()=> {
       
       const getData = async () => {

           let url = "";
           if(category){
               if (category === "Non_Alcoholic"){
                   url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
                } else{
                    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`

                    if(category === "gin"){
                        setBgColor("light-blue")
                    }else if(category === "vodka"){
                        setBgColor("purple")
                    }else if(category === "rum"){
                        setBgColor("red")
                    }else if(category === "scotch"){
                        setBgColor("orange")
                    }
                }
             } 
            // else if(search){
            // //     // hier kommt der fetch für die Suchmaschine
            // } 
            else {
                url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
                setBgColor("green")
            }

            try{
                const resp = await axios.get(url)
                if(resp.data.drinks){
                    setDrinks(resp.data.drinks)
                }
            }catch(err){
                console.error("there has been an error", err)
            }
            
        }
        getData()
        
       
    },[category])

    console.log(drinks)

    return ( 
        <mainContext.Provider value={{category, setCategory, drinks, setDrinks, search, setSearch, bgColor}}>
            {children}
        </mainContext.Provider>
     );
}
 
export default MainProvider;