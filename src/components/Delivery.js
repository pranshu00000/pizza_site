const Delivery =()=>{
    return(
        <div className="h-[655px]  flex">
            <img className=" ml-24 mt-2" src="./img/delivery.png" alt="delivery" />
            <div className=" my-40 w-5/12">
                    <h1 className="text-gray-900 font-extrabold text-4xl ">Enter Your Phone Number</h1>
                    <div>
                        <input className="pl-2 bg-gray-300 w-72 h-12 rounded-sm mt-12 text-xl font-bold" type="number"/>
                    </div>
                    <div> 
                        <input className="w-48 bg-blue-600 h-12 rounded-md mt-12 text-lg font-bold" value="Get OTP" type="submit" name="Get Otp" id="submit"/>
                    </div>
            </div>
        </div>
        
    )
}
export default Delivery;