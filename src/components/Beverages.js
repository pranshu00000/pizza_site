import FoodItem from "./FoodItem";

const Beverages =()=>{
    return(
        <div>

        <div className="flex justify-center items-center text-center mt-8">
            <h1 className="font-extrabold text-3xl text-black ">
                BEVERAGES
            </h1>
        </div>
        <div className="grid grid-cols-5  pl-10 gap-y-10 my-8">
            <FoodItem img="./img/beverages.png" name="Coca-Cola" id="1"/>
            <FoodItem img="./img/beverages.png" name="Sprite" id="1"/>
            <FoodItem img="./img/beverages.png" name="Thumbs Up" id="1"/>
            <FoodItem img="./img/beverages.png" name="Fanta" id="1"/>
            <FoodItem img="./img/beverages.png" name="Mazza" id="1"/>
            <FoodItem img="./img/beverages.png" name="Hot Coffee" id="1"/>
            <FoodItem img="./img/beverages.png" name="Cold Coffee" id="1"/>
            <FoodItem img="./img/beverages.png" name="Ice Tea" id="1"/>
            <FoodItem img="./img/beverages.png" name="Lime Juice" id="1"/>
            
            
        </div>
        </div>

    )
}
export default Beverages;