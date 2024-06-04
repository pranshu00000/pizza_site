import FoodItem from "./FoodItem";

const Non_Veg_Pizza_Item=()=>{
    return(
        <div>

        <div className="flex justify-center items-center text-center mt-10">
            <h1 className="font-extrabold text-3xl text-black ">
                NON VEG PIZZA
            </h1>
        </div>
        <div className="grid grid-cols-5  pl-10 gap-y-10 my-10">
            <FoodItem img="./img/non_veg_pizza.png" name="Chicken Golden Delight" id="1"/>
            <FoodItem img="./img/non_veg_pizza.png" name="Chicken Pepperoni" id="1"/>
            <FoodItem img="./img/non_veg_pizza.png" name="Indi Chicken Tikka" id="1"/>
            <FoodItem img="./img/non_veg_pizza.png" name="Chicken Fiesta" id="1"/>
            <FoodItem img="./img/non_veg_pizza.png" name="Chicken Sausage" id="1"/>
            <FoodItem img="./img/non_veg_pizza.png" name="Chicken Dominator" id="1"/>
            <FoodItem img="./img/non_veg_pizza.png" name="Pepper Barbecue & Onion" id="1"/>
            <FoodItem img="./img/non_veg_pizza.png" name="Chicken Golden Delight" id="1"/>
            <FoodItem img="./img/non_veg_pizza.png" name="Chicken Barbecue" id="1"/>
            <FoodItem img="./img/non_veg_pizza.png" name="Prawns Delight" id="1"/>
            <FoodItem img="./img/non_veg_pizza.png" name="Chicken Keema" id="1"/>
            <FoodItem img="./img/non_veg_pizza.png" name="Chicken Do Pyaza" id="1"/>
            <FoodItem img="./img/non_veg_pizza.png" name="Chicken Overloaded" id="1"/>
        </div>
        </div>

    );
}
export default Non_Veg_Pizza_Item;