import { Link } from "react-router-dom";

const FoodItem =(props)=>{
    return(
        <div className="bg-red-800 h-72 w-64 flex flex-col items-center pt-5 rounded-sm">
            <div className="h-44 w-44">
                <img src={props.img} alt="veg-pizza" id={props.id}/>
            </div>
            <div className="flex justify-center items-center">
                <h1 className="text-white font-semibold text-lg">{props.name}</h1>
            </div>
            <Link to="/delivery">
            <div className="bg-gray-500 h-10 w-40 mt-3 rounded-md flex justify-center items-center">
                <h1 className="text-white font-bold text-lg">Order Now</h1>
            </div>
            </Link>
        </div>
    )
}
export default FoodItem;