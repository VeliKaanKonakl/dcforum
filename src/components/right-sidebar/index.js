import React from "react";
import { FaArrowRight, FaDribbble } from "react-icons/fa6";
import { IoLogoBehance } from "react-icons/io5";
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
                {/* Meetups Content */}
                <div className="flex flex-col md:flex-row items-center w-full h-20 rounded-2xl p-5 gap-6">
                    <div className="flex item-center w-10 h-16 bg-[#2a3948] hover:bg-[#1b2024] rounded">
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
                    <div className="flex item-center w-10 h-16 bg-[#2a3948] hover:bg-[#1b2024] rounded">
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
                    <div className="flex item-center w-10 h-16 bg-[#2a3948] hover:bg-[#1b2024] rounded">
                        FEB
                        5
                    </div>
                    <div className="flex-col">
                        <div className="items-center text-[12px] text-[#e3e5e9] no-underline hover:underline cursor-pointer pb-1"> Meetup Brand Identity Design | Behance</div>
                        <div className="flex">
                            <div className=" bg-[#4578d2] w-4 h-4 rounded-full">
                                <IoLogoBehance />
                            </div>
                            <div className="items-center text-[10px] text-[#C5D0E6] pl-2">Behance • Sabe Jose, California, USA</div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-3">
                            <button className="flex items-center justify-center bg-[#2C353D] rounded-2xl px-3 py-1 hover:opacity-80">
                                <span className="text-[8px] text-[#C5D0E6] font-semibold">Full Time</span>
                            </button>
                            <button className="flex items-center justify-center bg-[#2C353D] rounded-2xl px-3 py-1 hover:opacity-80">
                                <span className="text-[8px] text-[#C5D0E6] font-semibold">Contract</span>
                            </button>
                            <button className="flex items-center justify-center bg-[#2C353D] rounded-2xl px-3 py-1 hover:opacity-80">
                                <span className="text-[8px] text-[#C5D0E6] font-semibold">Worldwide</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* PODCASTS */}
            <div className="box-content w-42  h-100 sm:w-full mt-3 bg-[#262D34] flex flex-col  rounded-2xl ">
                {/* Header */}
                <div className="flex-row items-center p-3 flex space-x-2">
                    Podcasts
                    <div className=" pl-2 pt-1">
                        <FaArrowRight />
                    </div>
                </div>
                {/* Podcasts Content */}
                <div className="flex flex-col md:flex-row items-center w-full h-20 rounded-2xl p-5 gap-6 justify-between">
                    <img src={"./podcasts-img1.png"} alt="" className="w-16 rounded" />
                    <div className="flex-col">
                        <div className=" text-[11px] text-[#e3e5e9] no-underline hover:underline cursor-pointer pb-2 flex-1">Selling a Business and Scaling<br></br> Another Amidst Tragedy</div>
                        <div className=" text-[10px] text-[#C5D0E6] ">by Michel Hansen</div>
                    </div>
                    <div className=""> <FaArrowRight /></div>
                </div>

                <div className="flex flex-col md:flex-row items-center w-full h-20 rounded-2xl p-5 gap-6 justify-between">
                    <img src={"./podcasts-img2.png"} alt="" className=" w-16 rounded" />
                    <div className="flex-col">
                        <div className=" text-[11px] text-[#e3e5e9] no-underline hover:underline cursor-pointer pb-2">Mental health as a founder and<br></br>the importance of community</div>
                        <div className=" text-[10px] text-[#C5D0E6] ">by James McKinven</div>
                    </div>
                    <div className=""> <FaArrowRight /></div>
                </div>

                <div className="flex flex-col md:flex-row items-center w-full h-20 rounded-2xl p-5 gap-6 justify-between" >
                    <img src={"./podcasts-img3.png"} alt="" className=" w-16 rounded" />
                    <div className="flex-col">
                        <div className=" text-[11px] text-[#e3e5e9] no-underline hover:underline cursor-pointer pb-2">Growing to $8.5k MRR in 1 year-<br></br>Marie Martens, Tally.so</div>
                        <div className=" text-[10px] text-[#C5D0E6] ">by Mahfuzul Nabil</div>
                    </div>
                    <div className=""> <FaArrowRight /></div>
                </div>

                <div className="flex flex-col md:flex-row items-center w-full h-20 rounded-2xl p-5 gap-6 justify-between">
                    <img src={"./podcasts-img4.png"} alt="" className=" w-16 rounded" />
                    <div className="flex-col">
                        <div className=" text-[11px] text-[#e3e5e9] no-underline hover:underline cursor-pointer pb-2">Mental Health and Bootstrapping in<br></br>2022 with Rob Wailling and TinySe</div>
                        <div className=" text-[10px] text-[#C5D0E6] ">by Dr. Jubed</div>
                    </div>
                    <div className=""> <FaArrowRight /></div>
                </div>

            </div>
        </div>
    )
}