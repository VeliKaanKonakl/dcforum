import React from "react";
import { Item } from "../popularItem/item.js";
import { LeftHead } from "../lefttopItem/leftHead.js";
import { Pinned } from "../pinnedGroup/pinned.js";

export const LeftSidebar = () => {
  return (
    <div className="hidden lg:flex flex-col lg:w-52">
      <div className="box-content h-56 lg:w-[16vw] md:w-[20vw] sm:w-full mt-3 bg-[#262D34] flex flex-col items-center rounded-2xl">
        <div className="flex-row items-center p-3">
          <LeftHead
            img="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            desc="Find the latest update"
            name="Newest and Recent"
          />
          <div className="bg-[#353b41] mt-3 rounded-2xl">
            <LeftHead
              img="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              desc="Shots featured oday by curators"
              name="Popular of the day"
            />
          </div>
          <LeftHead
            img="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            desc="Explore from your favorite person"
            name="Following"
          />
        </div>
      </div>
      {/* Box-1 End */}
      {/* Box-2 Start */}
      <div className="hidden lg:flex flex-col lg:w-[52vw] lg:h-[52vh] md:w-full md:h-full pt-5">
        <div className="box-content h-[55vh] w-[16.7vw] bg-[#262D34] rounded-2xl lg:flex flex-col">
          <div className="box-content p-4 overflow-y-scroll">
            <h1 className="text-2xl font-medium sticky">Popular Tags</h1>
            <div className="box-content pt-2 flex flex-col">
              <ul className="flex flex-col">
                <Item
                  img="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  desc="82,456 Posted by this tag"
                  name="#javascript"
                />
                <Item
                  img="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  desc="65,623 Posted . Trending"
                  name="#bitcoin"
                />
                <Item
                  img="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  desc="51,354 . Trending in Bangladesh"
                  name="#design"
                />
                <Item
                  img="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  desc="48,029 Posted by this tag"
                  name="#innovation"
                />
                <Item
                  img="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  desc="51,354 . Trending in Bangladesh"
                  name="#tutorial"
                />
                <Item
                  img="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  desc="82,645 Posted by this tag"
                  name="#business"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Box-2 End */}
      {/* Box-3 Start*/}
      <div className="hidden lg:flex flex-col lg:w-[52vw] lg:h-[45vh] mt-8">
        <div className="box-content h-[43vh] w-[16.5vw] bg-[#262D34] rounded-2xl lg:flex flex-col">
          <div className="box-content p-5">
            <a className="text-2xl font-medium sticky">Pinned Group </a>
            <div className="box-content pt-2 flex flex-col">
              <ul className="flex flex-col">
                <Pinned
                  img="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  desc="82,456 Posted by this tag"
                  name="#javascript"
                />
                <Pinned
                  img="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  desc="65,623 Posted . Trending"
                  name="#bitcoin"
                />
                <Pinned
                  img="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  desc="51,354 . Trending in Bangladesh"
                  name="#design"
                />
                <Pinned
                  img="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  desc="48,029 Posted by this tag"
                  name="#innovation"
                />
                <Pinned
                  img="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  desc="51,354 . Trending in Bangladesh"
                  name="#tutorial"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};