import Image from "next/image";
import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

/* Second section: three link columns (content placeholder, edit freely) */
const linkGroups = [
  {
    title: "About the Library",
    links: [
      "Vision, Mission & Values",
      "Customer Feedback Standards",
      "Strategic Plans, Annual Reports",
      "History of the Library",
      "Library Board",
      "Jobs at the Library",
    ],
  },
  {
    title: "Accessibility",
    links: [
      "Accessibility at Library Branches",
      "Services for People with Disabilities",
      "Collections for People with Disabilities",
      "Website Accessibility",
      "TTY Service",
    ],
  },
  {
    title: "Support Your Library",
    links: [
      "Spaces & Rooms",
      "Our Benefits",
      "Our Features",
      "Our Services",
      "Locations",
    ],
  },
];

/* Social icons from react-icons (UI only, no links/handlers) */
const socialIcons = [
  { name: "Facebook", Icon: FaFacebookF },
  { name: "X", Icon: FaXTwitter },
  { name: "Instagram", Icon: FaInstagram },
  { name: "YouTube", Icon: FaYoutube },
];

const Footer = () => {
  return (
    <footer className="mt-auto w-full border-t border-black/10 bg-[#f2eef6] px-6 py-10">
      {/* three sections stacked vertically */}
      <div className="flex flex-col gap-10">
        {/* 1. logo + tagline, left aligned */}
        <div className="flex flex-col items-start justify-start gap-2">
          <Image
            src="/BookHiveBeeandBookLogo.png"
            alt="BookHive logo"
            width={190}
            height={180}
            className="h-[60px] w-[170px] object-contain"
          />
          <p className="text-[#9418f9] text-2xl font-extrabold">A community of books and readers</p>
        </div>

        {/* 2. three columns, flex wrap */}
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          {linkGroups.map((group) => (
            <div key={group.title} className="flex min-w-48 flex-1 flex-col gap-4">
              <h3 className="font-bold text-gray-900 font-extrabold">{group.title}</h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li
                    key={link}
                    className="text-sm text-gray-700 transition-colors hover:text-gray-950"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. copyright left, four social icons right */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6">
          <p className="text-sm text-gray-700">
            © 2026 BookHive. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socialIcons.map(({ name, Icon }) => (
              <div
                key={name}
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-[#2D074D] transition-colors hover:bg-white"
              >
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
