import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerimg from "../../assets/banner.jpeg";
import bannerimgtwo from "../../assets/bannertwo.jpeg";
import bannerimgthree from "../../assets/bannerthrtree.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "./Container";

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-[#1F7A4D]/80 hover:bg-[#1F7A4D] text-white p-3 md:p-4 rounded-full transition-all duration-300 shadow-xl hidden sm:block"
      onClick={onClick}
    >
      <FaChevronRight size={24} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-[#1F7A4D]/80 hover:bg-[#1F7A4D] text-white p-3 md:p-4 rounded-full transition-all duration-300 shadow-xl hidden sm:block"
      onClick={onClick}
    >
      <FaChevronLeft size={24} />
    </div>
  );
}

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    appendDots: (dots) => (
      <div style={{ bottom: "30px" }}>
        <ul className="m-0 custom-dots"> {dots} </ul>
      </div>
    ),
  };

  return (
    <section className="bg-white pb-12">
      <Container>
        {/* মারকিউ সেকশন */}
        <div className="flex items-center bg-[#E8F5E9] border-l-8 border-[#1F7A4D] my-6 rounded-r-xl overflow-hidden shadow-md">
          <div className="bg-[#1F7A4D] text-white px-6 py-3 font-bold text-base md:text-lg whitespace-nowrap">
            ঘোষণা:
          </div>
          <marquee behavior="scroll" direction="left" className="py-2">
            <span className="text-base md:text-xl font-semibold text-[#1F7A4D] px-4">
              হযরত শাহ্ আজম রহ. হিফজুল কোরআন দরগাহ্ মডেল মাদ্রাসা || স্থাপিতঃ ২০১৮ ইংরেজী ১৪৩৯-৪০ হিজরী। || নূরানী, নাজেরা ও হিফজ বিভাগে ভর্তি চলছে...
            </span>
          </marquee>
        </div>

        {/* স্লাইডার সেকশন */}
        <div 
          data-aos="fade-up" 
          className="relative rounded-3xl overflow-hidden shadow-2xl border-[6px] border-[#E8F5E9]"
        >
          <Slider {...settings}>
            
            {/* SLIDE 1 */}
            <div className="relative">
              {/* মোবাইল এর জন্য h-[300px] এবং বড় স্ক্রিনের জন্য h-[550px] বা aspect-[16/7] */}
              <div className="h-[300px] sm:h-[450px] lg:h-[550px] w-full">
                <img
                  src={bannerimg}
                  alt="Madrasah Banner"
                  className="w-full h-full object-cover shadow-inner"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* SLIDE 2 */}
            <div className="relative">
              <div className="h-[300px] sm:h-[450px] lg:h-[550px] w-full">
                <img
                  src={bannerimgtwo}
                  alt="Madrasah Banner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* SLIDE 3 */}
            <div className="relative">
              <div className="h-[300px] sm:h-[450px] lg:h-[550px] w-full">
                <img
                  src={bannerimgthree}
                  alt="Madrasah Banner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Banner;