import { Link } from "react-router-dom";
import FoodType from "./FoodType";

const Menu = () => {
    return (
      <div className="grid grid-cols-3 w-10/12 my-16 gap-10 mx-auto">
        <Link to="/Veg_Pizza_item"><FoodType name="Veg Pizza" img="./img/veg_pizza.png"/></Link>
        <Link to="/Non_Veg_Pizza_Item"><FoodType name="Non-Veg Pizza" img="./img/non_veg_pizza.png"/></Link>
        <Link to="/Slice"><FoodType name="Slice" img="./img/slice.png"/></Link>
        <Link to="/Beverages"><FoodType name="Beverage" img="./img/beverages.png"/></Link>
        <Link to="/Snack"><FoodType name="Snacks" img="./img/snack.png"/></Link>
        <Link to="/Addon"><FoodType name="Addon" img="./img/addon.png"/></Link>
        
      </div>
    );
  };

  export default Menu;
  