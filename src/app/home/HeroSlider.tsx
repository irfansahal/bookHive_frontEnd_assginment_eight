"use client"
import React from 'react';
import { Swiper , SwiperSlide } from 'swiper/react';
import { Navigation , Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//
const HeroSlider = () => {
    return (
        <div className=' text-black h-[550px] flex items-center'>
            <Swiper 
            modules={[Navigation, Pagination]}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full h-full"
            >
             
    <SwiperSlide key={1} >
      <div
  className="w-full h-[555px] bg-cover bg-center"
  style={{
    backgroundImage: `url('https://www.roombyroomdecor.com/images/blog/dreamy-dream-home-library-ideas-for-the-ultimate-book-sanctuary/96--15-Dreamy-Dream-Home-Library-Ideas-for-the-Ultimate-Book-Sanctuary-003.webp'),
     linear-gradient(
        rgba(0,0,0,0.45),
        rgba(0,0,0,0.55)
      )`,
  }}
>
    <div className='pt-30  flex flex-col items-senter gap-4 pl-10 md:pl-20 w-full md:w-[600px]'>
         <h1 className='text-5xl font-extrabold text-[#F5EBD8] text-shadow-lg text-shadow-[#0b030c]'>Discover Your Next Favorite</h1>
     <p className='font-extrabold text-white text-shadow-lg text-shadow-[#000000]'>Every book has a story waiting to be explored. Find your next favorite read and let every page take you somewhere new.</p>
     <div className='pt-30'>
        <button className="btn btn-soft text-[#21033a]"> Browse Books</button>
     </div>
    </div>
</div>
    </SwiperSlide>
   

  
    <SwiperSlide key={2} >
      <div
  className="w-full h-[555px] bg-cover bg-center"
  style={{
    backgroundImage: "url('https://static.wixstatic.com/media/7534fd_e78d0aee668f40d2a147e68c22820a06~mv2.png/v1/fill/w_740,h_415,al_c,lg_1,q_85,enc_avif,quality_auto/7534fd_e78d0aee668f40d2a147e68c22820a06~mv2.png')",
  }}
>
        <div className='pt-30  flex flex-col items-senter gap-4 pl-10 md:pl-20 w-full md:w-[600px]'>
         <h1 className='text-5xl font-extrabold text-[#000000] text-shadow-lg text-shadow-[#e4c2e8]'>Where Readers Connect</h1>
     <p className='font-extrabold text-[#000000] text-shadow-lg text-shadow-[#f2d1f0]'>Reading is even better when shared. Connect with fellow book lovers, exchange ideas, and build meaningful friendships.</p>
     <div className='pt-30'>
        <button className="btn btn-soft text-[#21033a]"> Browse Books</button>
     </div>
    </div>
</div>
    </SwiperSlide>
   
  <SwiperSlide key={3} >
      <div
  className="w-full h-[555px] bg-cover bg-center"
  style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1502485019198-a625bd53ceb7?utm_source=chatgpt.com')",
  }}
>
     <div className='pt-30  flex flex-col items-senter gap-4 pl-10 md:pl-20 w-full md:w-[600px]'>
         <h1 className='text-5xl font-extrabold text-[#eed9d9] text-shadow-lg text-shadow-[#070108]'>Share Your Reading Journey</h1>
     <p className='font-extrabold text-[#ebdada] text-shadow-lg text-shadow-[#170416]'>Every reader has a unique journey. Share your favorite books, express your thoughts, and inspire others with your reading experiences.</p>
     <div className='pt-30'>
        <button className="btn btn-soft text-[#21033a]"> Browse Books</button>
     </div>
    </div>
</div>
    </SwiperSlide>
   
<SwiperSlide key={4} >
      <div
  className="w-full h-[555px] bg-cover bg-center"
  style={{
    backgroundImage: "url('https://myreadingvintage.com/cdn/shop/articles/Vintage_books_and_a_writing_pen_b308f09c-8b2c-4f60-a8d8-d4330fc69e3b_1400x.png?v=1780540111')",
  }}
><div className='pt-30  flex flex-col items-senter gap-4 pl-10 md:pl-20 w-full md:w-[600px]'>
         <h1 className='text-5xl font-extrabold text-[#151111] text-shadow-lg text-shadow-[#eacdee]'>Let Every Page Inspire You</h1>
     <p className='font-extrabold text-[#1e1a1a] text-shadow-lg text-shadow-[#f1eef0]'>Discover new perspectives, explore different worlds, and make reading a beautiful part of your everyday life.</p>
     <div className='pt-30'>
        <button className="btn btn-soft text-[#21033a]"> Browse Books</button>
     </div>
    </div> 
  
</div>
    </SwiperSlide>
   
             
            </Swiper>
        </div>
    );
};

export default HeroSlider;