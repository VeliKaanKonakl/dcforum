import React from "react";
import { FaArrowRight } from "react-icons/fa6";


export const RightSidebar = () => {
    return (
        <div className="p-8">
            <div className="box-content h-56 lg:w-[16vw] w-full sm:w-full mt-3 bg-[#262D34] flex flex-col  rounded-2xl ">
                <div className="flex-row  p-3 flex space-x-2">
                    Meetups
                    <div className=" pl-2 pt-1">
                        <FaArrowRight />
                    </div>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
                    <button className="flex items-center justify-center bg-[#2C353D] rounded-2xl px-3 py-1 hover:opacity-80">
                        <span className="text-[8px] text-[#C5D0E6] font-semibold">Remote</span>
                    </button>

                    <button className="flex items-center justify-center bg-[#2C353D] rounded-2xl px-3 py-1 hover:opacity-80">
                        <span className="text-[8px] text-[#C5D0E6] font-semibold">Part Time</span>
                    </button>
                    <button className="flex items-center justify-center bg-[#2C353D] rounded-2xl px-3 py-1 hover:opacity-80">
                        <span className="text-[8px] text-[#C5D0E6] font-semibold">Worldwide</span>
                    </button>
                </div>
            </div>

            <div className="box-content h-60  w-screen sm:w-full mt-3 bg-[#262D34] flex flex-col rounded-2xl ">
                <div className="flex-row items-center p-3 flex space-x-2">
                    Podcasts
                    <div className=" pl-2 pt-1">
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>
    )
}