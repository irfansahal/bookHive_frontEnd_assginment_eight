import React from "react";
import {
  FaBookOpen,
  FaHeadphones,
  FaPlay,
  FaMusic,
  FaNewspaper,
} from "react-icons/fa6";

/* Content only — no links, no handlers */
const resources = [
  { name: "EBooks", Icon: FaBookOpen },
  { name: "Audiobooks", Icon: FaHeadphones },
  { name: "Videos", Icon: FaPlay },
  { name: "Music", Icon: FaMusic },
  { name: "Magazines", Icon: FaNewspaper },
];

const DigitalResources = () => {
  return (
    <section className="flex flex-col items-center gap-10 bg-gradient-to-r from-[#141111] to-[#740378] px-6 py-14">
      {/* heading div — sits above the icons div */}
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl font-bold text-white">Digital Resources</h2>
        <span className="h-1 w-12 rounded-full bg-white"></span>
      </div>

      {/* icons div — flex wrap, each icon in its own div */}
      <div className="flex flex-wrap items-start justify-center gap-x-12 gap-y-8">
        {resources.map(({ name, Icon }) => (
          <div key={name} className="flex flex-col items-center gap-3">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#740378] text-white">
              <Icon className="h-10 w-10" />
            </div>
            <span className="text-lg font-bold text-white">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalResources;
