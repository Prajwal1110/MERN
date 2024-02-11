import React from "react";
import bannerImg from "/images/home/banner.png";
// import 

const Banner = () => {
    return (
        <div className="section-container from-[#FAFAFA] to-[#FCFCFC] to-100%">
            <div className="py-24 flex flex-col md:flex-row items-center justify-between gap-8">

                {/* text*/}
                <div className="md:w-1/2 space-y-7 px-4">
                    {/* <img src={bannerImg} alt="" /> */}
                    <h2 className='md:text-5xl text-4xl font-bold m:leading-snug leading-snug'>Dive into Delights Of Delectable<span className="text-green">Food</span></h2>
                    <p className="text-x1 text-[#4A4A4A">Where Each Plate Weaves a Story of Cuilinary Mastery and Passionate Craftsmanships</p>
                    <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">Order Now</button>
                </div>

                {/* images */}
                <div className="md:w-1/2">
                    <img src={bannerImg} alt="" />
                
                <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
                <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
                    <img src="/images/home/b-food1.png" alt="" className="rounded-2xl" />
                </div>
                <div className="space-y-1" >
                    <h5 className="font-medium">Spicy noodles</h5>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className="text-red">$18.00</p>
                </div>
            </div>
            <div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
                <img src="/images/home/b-food1.png" alt="" className="rounded-2xl" />
                <div className="space-y-1">
                    <h5>Spicy noodles</h5>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className="text-red">$18.00</p>
                </div>
             </div>
            </div>
        </div>
        </div>

   
    // < div className = "md:w-1/2 px-4 space-y-7" >
    //     <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
    //         Dive into Delights Of Delectable <span className="text-green">Food</span>
    //       </h2>
    //       <p className="text-[#4A4A4A] text-xl">
    //         Where Each Plate Weaves a Story of Culinary Mastery and Passionate
    //         Craftsmanship
    //       </p>
    //       <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
    //         Order Now
    //       </button>
    //     </div >
        
      
  );
};

export default Banner;