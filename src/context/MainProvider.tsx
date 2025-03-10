import { createContext, useEffect, useState } from "react";

export const mainContext = createContext({})

const MainProvider = ({children} : {children: React.ReactNode}) => {
    // - hier die usestates, die benötigt werden zum fetchen und für die daten
    const [category, setCategory] = useState<string>("")
    const [drinks, setdrinks] = useState<any>([])
    const [search, setSearch] = useState<string>("")


    console.log(category)
    // - fetchen:

    useEffect(()=> {
        let url = "";
        if(category){
            if (category === "Non_Alcoholic"){
                url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
            } else{
                url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${category}`
            }
        } else if(search){
            // hier kommt der fetch für die Suchmaschine
        } else {
            // hier kommt der fetch für die random URL
        }
    })


    return ( 
        <mainContext.Provider value={{category, setCategory, drinks, setdrinks, search, setSearch}}>
            {children}
        </mainContext.Provider>
     );
}
 
export default MainProvider;