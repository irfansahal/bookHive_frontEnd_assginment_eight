import React from "react";

/* Right column (2 of 6): Library News — content only, no links */
const libraryNews = [
  {
    title: "New Books Have Arrived!",
    text: "Discover our latest collection of exciting novels, inspiring stories, and educational books. Find your next favorite read today...",
    date: "10.25.2026",
  },
  {
    title: "Join Our Reading Community",
    text: "Book lovers, it's time to connect! Share your favorite stories, exchange recommendations, and meet readers who love books just like you...",
    date: "10.20.2026",
  },
  {
    title: "Celebrate the Joy of Reading",
    text: "Every book opens a new world. Make time for reading, explore different genres, and let wonderful stories inspire your everyday life...",
    date: "10.15.2026",
  },
];

/* Left column (4 of 6): dark menu list */
const libraryServices = [
  { name: "Archival & Special Collections", isActive: true },
  { name: "Research Assistance", isActive: false },
  { name: "Scan, Print, Photocopy", isActive: false },
  { name: "Study Spaces & PCs", isActive: false },
  { name: "Borrow, Reserve, Renew", isActive: false },
  { name: "Library Guides", isActive: false },
];

/* Placeholder illustration (wooden card catalog) — replace with a real
   photo later via <Image src="/your-photo.jpg" fill className="object-cover" /> */

const AboutOurLibrary = async () => {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`);
  const data = await res.json()

  console.log("categoreis", data);
  
  const categories = data.categories

  return (
    <section className="px-6 py-14">
      {/* two divs, flex wrap: left = 4/6, right = 2/6 */}
      <div className="flex flex-wrap gap-8">
        {/* LEFT — 4 of 6 parts: menu + image (also flex wrap) */}
        <div className="flex w-full flex-wrap gap-6 lg:flex-[4]">
          {/* dark menu list */}
          <div className="flex w-full min-w-56 flex-1 flex-col justify-center bg-[#111111]">
            {categories.map((category) => (
              <div
                key={category._id}
                className={`border-b border-white/15 px-5 py-5 text-center font-bold ${
                  category ? "text-white" : "text-neutral-400"
                }`}
              >
                {category.title}
              </div>
            ))}
          </div>

          {/* image */}
          <div className="relative min-h-72 w-full min-w-56 flex-1 overflow-hidden bg-[#7a5227]" 
           style={{ backgroundImage : "url('/CozyBookHiveLibraryRetreat.png')"}}>
            <h1>this about section</h1> 
          </div>
        </div>

        {/* RIGHT — 2 of 6 parts: Library News */}
        <div className="flex w-full flex-col gap-6 lg:flex-[2]">
          <h2 className="text-3xl font-bold text-neutral-900">Library News</h2>
          <span className="h-1.5 w-12 rounded-full bg-[#9310aa]"></span>
          <hr className="border-neutral-200" />

          <ul className="flex flex-col gap-8">
            {libraryNews.map((news) => (
              <li key={news.title} className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-neutral-900">
                  {news.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  {news.text}
                </p>
                <span className="text-sm text-[#9e08b5] font-bold">
                  → Posted on {news.date}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutOurLibrary;
