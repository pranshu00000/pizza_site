import FoodItem from "./FoodItem";

const Snacks =()=>{
    return(
        <div>

        <div className="flex justify-center items-center text-center mt-8">
            <h1 className="font-extrabold text-3xl text-black ">
                SNACKS
            </h1>
        </div>
        <div className="grid grid-cols-5  pl-10 gap-y-10 my-8">
            <FoodItem img="./img/snack.png" name="Veg Burger" id="1"/>
            <FoodItem img="./img/snack.png" name="Chicken Burger" id="1"/>
            <FoodItem img="./img/snack.png" name="Double Chicken Burger" id="1"/>
            <FoodItem img="./img/snack.png" name="Cheese Burger" id="1"/>
            <FoodItem img="./img/snack.png" name="Veg Sandwich" id="1"/>
            <FoodItem img="./img/snack.png" name="Bun Samosha" id="1"/>
            <FoodItem img="./img/snack.png" name="Bun Chicken Tikka" id="1"/>
        </div>
        </div>

    )
}
export default Snacks;