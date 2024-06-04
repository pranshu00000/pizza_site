import React from 'react'

const HomePoster = (props) => {
  return (
    <div>
      
        <div className="main-pizza bg-red-200">
        <div className="main-block">
            <img  className="h-[414px] w-[622px]"src={props.img1} alt="" />
            
            <div className="bg-red-300 rounded-2xl">
                <p class="main-p max-w-[622px] bg-red-300  pl-7 pr-7 pb-10" >{props.p1}</p>
                <button class="btn  mx-[235px] mb-10" >Buy now</button>

            </div>
        </div>
        <div className="main-block ">
            <img  className="h-[414px] w-[622px]"src={props.img2} alt="" />
            
            <div className="bg-red-300 rounded-2xl">
                <p class="main-p max-w-[622px] bg-red-300 pl-7 pr-7 pb-10" >{props.p2}</p>
                <button class="btn ml-[235px] mb-10" >Buy Now</button>

            </div>
        </div>
        
        
    </div>
    </div>
  )
}

export default HomePoster
