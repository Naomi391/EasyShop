import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const SideNavContent = ({ title, one, two, three }) => {
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300 max-h-36 overflow-y-auto ">
      <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
        {title}
      </h3>
      <ul className="text-sm">
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {one}
          <span>
            <FaArrowCircleRight />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {two}
          <span>
            <FaArrowCircleRight />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {three}
          <span>
            <FaArrowCircleRight />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SideNavContent;
