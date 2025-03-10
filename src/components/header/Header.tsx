import Search from "../search/Search";


const Header = () => {
    return ( 
        <header className="p-4 flex flex-col">
            <div className="flex justify-between items-center mb-10">
                <img className="h-2" src="../../../public/img/LOGO.png" alt="logo that says `Drinks & Chill`" />
                <a className="font-[Mont] font-light text-[0.8rem] uppercase" href="">Menu</a>
            </div>

            <div className="flex flex-col gap-2 items-start justify-center p-5">
                <h1 className="text-5xl">Cocktails &  Drinks!</h1>
                <p className="font-[Mont] uppercase font-extralight text-[0.7rem] p-1">Welcome to the world of cocktails and drinks!</p>
            </div>
            
            <Search/>

            <div className="self-center cursor-pointer transition ease-in-out hover:animate-ping">
                <img className="h-4" src="../../../public/img/Arrows.svg" alt="three facing down arrows" />
            </div>
        </header>
     );
}
 
export default Header;