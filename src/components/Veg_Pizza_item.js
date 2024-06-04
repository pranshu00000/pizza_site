import FoodItem from "./FoodItem";

const Veg_Pizza_item =()=>{
    return(
        <div>

        <div className="flex justify-center items-center text-center mt-10">
            <h1 className="font-extrabold text-3xl text-black ">
                VEG-PIZZA
            </h1>
        </div>
        <div className="grid grid-cols-5  pl-10 gap-y-10 my-10">
            <FoodItem img="./img/veg_pizza.png" name="Margarita" id="1"/>
            <FoodItem img="./img/veg_pizza.png" name="Double Cheese" id="1"/>
            <FoodItem img="./img/veg_pizza.png" name="Farm House" id="1"/>
            <FoodItem img="./img/veg_pizza.png" name="Peppy Paneer" id="1"/>
            <FoodItem img="./img/veg_pizza.png" name="Mexican Green Wave" id="1"/>
            <FoodItem img="./img/veg_pizza.png" name="Deluxe Veggie" id="1"/>
            <FoodItem img="./img/veg_pizza.png" name="Fresh Veggie" id="1"/>
            <FoodItem img="./img/veg_pizza.png" name="Cheese n Corn" id="1"/>
            <FoodItem img="./img/veg_pizza.png" name="Veggie Paradise" id="1"/>
            <FoodItem img="./img/veg_pizza.png" name="Paneer Makkhani" id="1"/>
            <FoodItem img="./img/veg_pizza.png" name="Indi Tandoori Paneer" id="1"/>
            <FoodItem img="./img/veg_pizza.png" name="Champaran Veg Pizza" id="1"/>
            <FoodItem img="./img/veg_pizza.png" name="Paneer Do Pyaza" id="1"/>
            <FoodItem img="./img/veg_pizza.png" name="Achari Masti" id="1"/>
            <FoodItem img="./img/veg_pizza.png" name="Paneer 65" id="1"/>
        </div>
        </div>

    )
}
export default Veg_Pizza_item;