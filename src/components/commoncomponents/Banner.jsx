import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerimg from "../../assets/bannerone.jpeg";
import bannerimgtwo from "../../assets/bannertwo.jpeg";
import bannerimgthree from "../../assets/bannerthrtree.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import Container from "./Container";

function SampleNextArrow({ onClick }) {
  return (
    <div
      className="absolute right-2 md:-right-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowCircleRight
        size={40}
        className="text-primary hover:text-deep_slate_blue duration-300"
      />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-2 md:-left-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowCircleLeft
        size={40}
        className="text-primary hover:text-deep_slate_blue duration-300"
      />
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
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <section
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="200"
      className="bannerbg relative"
    >
      <Container>
        <div>
          <marquee behavior="scroll" direction="left">
            <h2 className="text-[20px] text-[#d92020a5]">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia hic amet neque beatae sapiente, eum dolores rerum sed possimus vero? ipsum, dolor sit amet consectetur adipisicing elit. Eos, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, facilis.</h2>
          </marquee>
        </div>
        <Slider {...settings}>
          
          {/* SLIDE 1 */}
          <div className="overflow-hidden">
            <div className="aspect-[16/9] w-full">
              <img
                src={bannerimg}
                alt="Banner One"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* SLIDE 2 */}
          <div className="overflow-hidden">
            <div className="aspect-[16/9] w-full">
              <img
                src={bannerimgtwo}
                alt="Banner Two"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
            <div className="overflow-hidden">
            <div className="aspect-[16/9] w-full">
              <img
                src={bannerimgthree}
                alt="Banner Two"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </Slider>
      </Container>
    </section>
  );
};

export default Banner;
