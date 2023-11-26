import React from "react";
import { FaArrowRight, FaDribbble } from "react-icons/fa6";

//lg:w-[16vw] w-full

export const RightSidebar = () => {
    return (
        <div className="p-8">
            {/* MEETUPS */}
            <div className="box-content w-42  h-100 sm:w-full mt-3 bg-[#262D34] flex flex-col  rounded-2xl ">
                {/* Header */}
                <div className="flex-row items-center  p-3 flex">
                    Meetups
                    <div className=" pl-2 pt-1">
                        <FaArrowRight />
                    </div>
                </div>
                {/* Content */}
                <div className="flex flex-col md:flex-row items-center w-full h-20 rounded-2xl p-5 gap-6">
                    <div className="flex item-center w-10 h-20 bg-[#2a3948] hover:bg-[#1b2024] rounded">
                        FEB
                        7
                    </div>
                    <div className="flex-col">
                        <div className="items-center text-[12px] text-[#e3e5e9] no-underline hover:underline cursor-pointer pb-1"> Design Meetups USA | Dribbble</div>
                        <div className="flex">
                            <div className=" bg-[#a22b5f] w-4 h-4 rounded-full">
                                <FaDribbble />
                            </div>
                            <div className="items-center text-[10px] text-[#C5D0E6] pl-2">Dribbble • Austin, Texas, USA</div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-3">
                            <button className="flex items-center justify-center bg-[#2C353D] rounded-2xl px-3 py-1 hover:opacity-80">
                                <span className="text-[8px] text-[#C5D0E6] font-semibold">Remote</span>
                            </button>
                            <button className="flex items-center justify-center bg-[#2C353D] rounded-2xl px-3 py-1 hover:opacity-80">
                                <span className="text-[8px] text-[#C5D0E6] font-semibold">Part Time</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center w-full h-20 rounded-2xl p-5 gap-6">
                    <div className="flex item-center w-10 h-20 bg-[#2a3948] hover:bg-[#1b2024] rounded">
                        FEB
                        7
                    </div>
                    <div className="flex-col">
                        <div className="items-center text-[12px] text-[#e3e5e9] no-underline hover:underline cursor-pointer pb-1"> Design Meetups USA | Dribbble</div>
                        <div className="flex">
                            <div className=" bg-[#a22b5f] w-4 h-4 rounded-full">
                                <FaDribbble />
                            </div>
                            <div className="items-center text-[10px] text-[#C5D0E6] pl-2">Dribbble • Austin, Texas, USA</div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-3">
                            <button className="flex items-center justify-center bg-[#2C353D] rounded-2xl px-3 py-1 hover:opacity-80">
                                <span className="text-[8px] text-[#C5D0E6] font-semibold">Remote</span>
                            </button>
                            <button className="flex items-center justify-center bg-[#2C353D] rounded-2xl px-3 py-1 hover:opacity-80">
                                <span className="text-[8px] text-[#C5D0E6] font-semibold">Part Time</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center w-full h-20 rounded-2xl p-5 gap-6">
                    <div className="flex item-center w-10 h-20 bg-[#2a3948] hover:bg-[#1b2024] rounded">
                        FEB
                        7
                    </div>
                    <div className="flex-col">
                        <div className="items-center text-[12px] text-[#e3e5e9] no-underline hover:underline cursor-pointer pb-1"> Design Meetups USA | Dribbble</div>
                        <div className="flex">
                            <div className=" bg-[#a22b5f] w-4 h-4 rounded-full">
                                <FaDribbble />
                            </div>
                            <div className="items-center text-[10px] text-[#C5D0E6] pl-2">Dribbble • Austin, Texas, USA</div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-3">
                            <button className="flex items-center justify-center bg-[#2C353D] rounded-2xl px-3 py-1 hover:opacity-80">
                                <span className="text-[8px] text-[#C5D0E6] font-semibold">Remote</span>
                            </button>
                            <button className="flex items-center justify-center bg-[#2C353D] rounded-2xl px-3 py-1 hover:opacity-80">
                                <span className="text-[8px] text-[#C5D0E6] font-semibold">Part Time</span>
                            </button>
                        </div>
                    </div>
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