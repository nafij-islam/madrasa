import React, { useEffect } from "react";
import { FaEye, FaImages } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "./../commoncomponents/Container";

// ছবিগুলোর একটি লিস্ট (আপনার ফোল্ডার অনুযায়ী পাথ ঠিক করে নিবেন)
const galleryData = [
  { id: 1, title: "মাদ্রাসা ভবন", category: "ভবন", img: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=600" },
  { id: 2, title: "শিক্ষার্থীদের ক্লাস", category: "শিক্ষা", img: "https://images.unsplash.com/photo-1577891729319-815402ec8dd0?q=80&w=600" },
  { id: 3, title: "হিফজ সম্পন্নকারী শিক্ষার্থী", category: "সাফল্য", img: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=600" },
  { id: 4, title: "এতিমখানা কার্যক্রম", category: "সেবা", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600" },
  { id: 5, title: "মাজার শরীফ", category: "স্থাপত্য", img: "https://images.unsplash.com/photo-1590076215667-873d3950fc33?q=80&w=600" },
  { id: 6, title: "দরগাহ জামে মসজিদ", category: "স্থাপত্য", img: "https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=600" },
  { id: 7, title: "দরগাহ জামে মসজিদ", category: "স্থাপত্য", img: "https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=600" },
  { id: 8, title: "দরগাহ জামে মসজিদ", category: "স্থাপত্য", img: "https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=600" },
  { id: 9, title: "দরগাহ জামে মসজিদ", category: "স্থাপত্য", img: "https://images.unsplash.com/photo-1564769625905-50e93615e769?q=80&w=600" },
];

const GalleryCom = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="h-[2px] w-8 bg-[#F4C430]"></div>
            <span className="text-[#F4C430] font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <FaImages /> ফটো গ্যালারি
            </span>
            <div className="h-[2px] w-8 bg-[#F4C430]"></div>
          </div>
          <h2 className="text-[#1F7A4D] text-3xl md:text-5xl font-black mb-4">
            আমাদের কার্যক্রমের কিছু স্থিরচিত্র
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            হযরত শাহ আজম রহ. হিফজুল কোরআন দরগাহ মডেল মাদ্রাসার একাডেমিক ও আধ্যাত্মিক পরিবেশের ঝলক।
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <div 
              key={item.id} 
              data-aos="zoom-in" 
              data-aos-delay={index * 100}
              className="group relative h-72 overflow-hidden rounded-3xl border-4 border-[#E8F5E9] shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F7A4D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="bg-[#F4C430] text-[#1F7A4D] text-[10px] font-bold uppercase px-3 py-1 rounded-full w-fit mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.title}
                </h3>
                
                {/* View Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-4 rounded-full text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                  <FaEye size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </Container>
    </section>
  );
};

export default GalleryCom;