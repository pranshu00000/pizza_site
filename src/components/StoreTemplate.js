import { ImLocation2 } from "react-icons/im";
import { IoMdCall } from "react-icons/io";
import { IoIosTime } from "react-icons/io";
import { GiForkKnifeSpoon } from "react-icons/gi";
const StoreTemplate=(props)=>{
    return(
        <div className="bg-red-800 
                        h-64 
                        rounded-sm 
                        w-9/12 
                        63
                        mx-auto
                        flex
                        my-8
                        ">
            
            <img className="h-52 w-52 ml-8 my-auto flex" src="./img/storeIcon.png" alt="store" />
            <div className=" pl-12 w-7/12 flex flex-col justify-center ml-12 text-white">
                <div className="flex items-center ml-5 my-3">
                    <ImLocation2 className="mr-2"/>
                    <h1 className="font-semibold">{props.address}</h1>
                </div>
                <div className=" flex items-center ml-5 my-3">
                    <IoMdCall className="mr-2" />
                    <h1 className="font-semibold"> {props.contact}</h1>
                </div>
                <div className="flex items-center ml-5 my-3">
                    <IoIosTime className="mr-2"/>
                    <h1 className="font-semibold">{props.time}</h1>
                </div>
                <div className="flex items-center ml-5 my-3">
                    <GiForkKnifeSpoon className="mr-2"/>
                    <h1 className="font-semibold">{props.facility}</h1>
                </div>

            </div>
            <div className=" w-1/5 ml-2 p-8 flex flex-col justify-evenly">
                <div className="bg-gray-500 h-12 rounded-xl flex justify-center items-center">
                    <h1 className="font-extrabold text-center text-xl text-white">
                        ORDER
                    </h1>
                </div>
                <div className="bg-gray-500 h-12 rounded-xl flex justify-center items-center">
                    <h1 className="font-extrabold text-center text-xl text-white">
                        NAVIGATE
                    </h1>
                </div>
                <div className="bg-gray-500 h-12 rounded-xl flex justify-center items-center">
                    <h1 className="font-extrabold text-center text-xl text-white">
                        CALL
                    </h1>
                    </div>
            </div>
            
        </div>
    )
}
export default StoreTemplate;