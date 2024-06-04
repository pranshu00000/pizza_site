import Footerbeg from "./Footerbeg";
import HomePoster from "./HomePoster";

const Home = () => {
    return (
      <div className="img-cont">
        <div className="bg-red-200 "><img className="img" src="./img/pizzabg.png" alt="" /></div>
        <div className=" text-white font-semibold txt">
          <p  className="text-8xl head">PEOPLE.PIZZA. <br />PLANET</p>
          <p className="text-4xl head">Crafting Crispy Dreams, One Slice at a Time!</p>
        </div>
        <HomePoster
          img1="./images/pizza1.jpg"
          p1="A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier"
          img2="./images/pizza2.jpg"
          p2="Choose your favourite non-veg pizzas from the Domino's Pizza menu. Get fresh non-veg pizza with your choice of crusts & toppings"
          />
          <HomePoster
          img1="./images/pizza3.jpg"
          p1="Indulge into mouth-watering taste of Pizza mania range, perfect answer to all your food cravings"
          img2="./images/pizza4.jpg"
          p2="Indulge into mouth-watering taste of Pizza mania range, perfect answer to all your food cravings"
          />
        <Footerbeg/>
      </div>
    );
  };
  
  export default Home;