import FoodItem from "./FoodItem";

const AddOns =()=>{
    return(
        <div>

        <div className="flex justify-center items-center text-center mt-10">
            <h1 className="font-extrabold text-3xl text-black ">
                ADD ON
            </h1>
        </div>
        <div className="grid grid-cols-5  pl-10 gap-y-10 my-8 mb-[107px]">
            <FoodItem img="./img/addon.png" name="Garlic Bread" id="1"/>
            <FoodItem img="./img/addon.png" name="Chocolava Cake" id="1"/>
            <FoodItem img="./img/addon.png" name="Cheese Dip" id="1"/>
            <FoodItem img="./img/addon.png" name="Extra Cheese" id="1"/>
        </div>
        </div>

    )
}
export default AddOns;