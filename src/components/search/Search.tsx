const Search = () => {
    return ( 
    <form className="flex gap-3 items-center text-[0.8 rem] mb-10 p-5">
        <input className="bg-white text-dark-blue rounded-sm text-[0.8rem] p-1 font-[Mont] " type="text" placeholder="type something" />
        <button className=" cursor-pointer font-[Mont] bg-light-blue rounded-sm text-dark-blue text-[0.8rem] py-1 px-3" type="submit">Search</button>
    </form> );
}
 
export default Search;