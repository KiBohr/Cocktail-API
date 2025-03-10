import ItemCard from "../../components/itemCard/ItemCard";

const Home = () => {
    return (
    <div className="grid grid-cols-2 gap-2 p-10">
        <ItemCard path="cocktail/gin" linkText="Gin" color="light-blue"/>
        <ItemCard path="cocktail/vodka" linkText="Vodka" color="purple"/>
        <ItemCard path="cocktail/rum" linkText="Rum" color="red"/>
        <ItemCard path="cocktail/scotch" linkText="Scotch" color="orange"/>
        <ItemCard path="" linkText="non alcoholic" color="blue"/>
        <ItemCard path="" linkText="Random Drink" color="green"/>
    </div>
     );
}
 
export default Home;