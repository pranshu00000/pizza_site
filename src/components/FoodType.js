const FoodType=(props)=>{
    return(
        <div className="w-96 h-96
                        bg-red-700
                        rounded-md
                         flex 
                         justify-center 
                         align-middle 
                         items-center
                         flex-col
                         hover:shadow-gray-800
                         hover:shadow-lg">
            <div className="h-20 w-full
                         mt-10
                         text-center mb-4">
                <h1 className="text-3xl font-mono font-extrabold text-white">{props.name}</h1>
                
            </div>
            <div className="h-72 ">
            <img className="mb-16 h-72 w-72 justify-center "src={props.img} alt="Veg-Pizza"/>
            </div>
        </div>
    )

}
export default FoodType;