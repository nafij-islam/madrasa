import React, { useEffect } from "react";
import { 
  FaUserCircle, FaGraduationCap, FaBriefcase, FaPrayingHands, 
  FaClock, FaHeart, FaMosque, FaQuran 
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import scholarImg from "../assets/dada ajmi.jpeg"; 
import Container from './../components/commoncomponents/Container';

const Biography = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const infoBlocks = [
    {
      id: 1,
      title: "জন্ম ও বংশ পরিচয়",
      desc: "১ জুলাই ১৯৬৬ ইং শুক্রবার, মৌলভীবাজারের কমলগঞ্জ পৌরসভার রামপাশা গ্রামে এক ওলি পরিবারে জন্মগ্রহণ করেন। পিতা: হযরত মাওলানা শাহ মোহাম্মদ মোশাররফ আলী রহ. এবং মাতা: মোছাঃ আয়েশা বেগম।",
      icon: <FaUserCircle />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: 2,
      title: "শিক্ষা জীবন",
      desc: "সফাত আলী মাদ্রাসা থেকে দাখিল ও আলিম সম্পন্ন করে কুমিল্লা পিপুলিয়া মাদ্রাসা থেকে ফাজিল এবং সোনাকান্দা কামিল মাদ্রাসা থেকে কামিল (মুফতি) ডিগ্রি অর্জন করেন।",
      icon: <FaGraduationCap />,
      color: "bg-green-50 text-green-600"
    },
    {
      id: 3,
      title: "কর্মজীবন",
      desc: "সিলেট গোয়ালাবাজার আদর্শ উচ্চ বিদ্যালয়ে আমৃত্যু শিক্ষকতা করেন। এছাড়াও মইনপুর জালালিয়া মাদ্রাসার সুপারিনটেনডেন্ট হিসেবে দায়িত্ব পালন করেছেন।",
      icon: <FaBriefcase />,
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: 4,
      title: "মাদ্রাসা ও ফাউন্ডেশন",
      desc: "২০১৮ সালে তিনি 'হযরত শাহ আজম রহ. হিফজুল কুরআন দরগাহ্ মডেল মাদ্রাসা' প্রতিষ্ঠা করেন। এছাড়াও তিনি শাহ আজম রহ. দরগাহ্ ফাউন্ডেশনের সভাপতি ছিলেন।",
      icon: <FaQuran />,
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-[#F9FBF9] overflow-hidden">
      <Container>
        {/* Title Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h4 className="text-[#F4C430] font-bold tracking-[3px] uppercase text-sm mb-2">স্মৃতিচারণ ও জীবনী</h4>
          <h2 className="text-[#1F7A4D] text-3xl md:text-5xl font-black mb-4">
            আলহাজ্ব হযরত মাওলানা মুফতী শাহ্ মোহাম্মদ মোশাহিদ আলী আজমী (রহ.)
          </h2>
          <div className="flex justify-center items-center gap-4 text-gray-500 font-bold">
            <span className="flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm">
              জন্ম: ১ জুলাই ১৯৬৬
            </span>
            <span className="text-[#F4C430]">●</span>
            <span className="flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm">
              ইন্তেকাল: ২৭ ফেব্রুয়ারি ২০২৪
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Image & Key Highlight */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#1F7A4D]/10 rounded-[3rem] blur-xl group-hover:bg-[#F4C430]/10 transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl">
                <img 
                  src={scholarImg} 
                  alt="Mufti Shah Mohammad Moshahid Ali Azmi" 
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Legacy Note */}
            <div className="bg-[#1F7A4D] p-8 rounded-[2rem] text-white relative shadow-xl">
              <div className="absolute -top-4 left-8 text-4xl text-[#F4C430] font-serif">"</div>
              <p className="italic leading-relaxed text-lg">
                তিনি ছাত্রদের 'বাবা' বলে ডাকতেন। এতিম ও অসচ্ছল ছাত্রদের শিক্ষা নিশ্চিত করতে তিনি ছিলেন সদা সচেষ্ট। তাঁর প্রতিষ্ঠিত মাদ্রাসায় আজ ২৪ ঘণ্টা পবিত্র কুরআনের তেলাওয়াত ধ্বনিত হয়।
              </p>
              <h5 className="mt-4 font-bold text-[#F4C430] text-right">— ওলিয়ে কামিল ও গদ্দীনিশিন</h5>
            </div>
            
            {/* Spiritual Connection */}
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-lg">
              <h4 className="text-[#1F7A4D] font-bold flex items-center gap-2 mb-3">
                <FaPrayingHands className="text-[#F4C430]" /> আধ্যাত্মিক ধারা
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                তিনি তাঁর পিতা হযরত মাওলানা শাহ মোহাম্মদ মোশাররফ আলী রহ. এর নিকট তাসাউফের শিক্ষা নেন এবং আলহাজ্ব হযরত মাওলানা কাজী রফিক আহমদ নকশাবন্দী ছাহেবের নিকট বাইয়াত গ্রহণ করেন।
              </p>
            </div>
          </div>

          {/* Right Side: Detailed Sections */}
          <div className="lg:col-span-7 space-y-8" data-aos="fade-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {infoBlocks.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className={`${item.color} w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-4`}>
                    {item.icon}
                  </div>
                  <h4 className="text-[#1F7A4D] font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Additional Details From Text */}
            <div className="space-y-6">
              <div className="bg-[#E8F5E9] p-6 rounded-3xl border border-[#1F7A4D]/10">
                <h4 className="text-[#1F7A4D] font-bold flex items-center gap-2 mb-3">
                  <FaHeart className="text-[#F4C430]" /> আচার-আচরণ ও আদর্শ
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  তিনি ছিলেন অত্যন্ত সুললিত কণ্ঠের অধিকারী। তাঁর মোনাজাত মানুষের হৃদয়ে নাড়া দিত। তিনি ছিলেন ক্ষমাশীলতার মূর্ত প্রতীক; কেউ তাঁর সাথে চরম বেয়াদবী করলেও তিনি সহজেই তাকে ক্ষমা করে দিতেন। ইন্তেকালের কয়েক মাস আগে ১০ জুন ২০২৩ তারিখে তিনি পবিত্র হজ্জ সম্পাদন করেন।
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <h4 className="text-[#1F7A4D] font-bold flex items-center gap-2 mb-3">
                  <FaMosque className="text-[#F4C430]" /> মসজিদের খেদমত
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  তিনি হযরত শাহ্ আজম রহ. দরগাহ্ জামে মসজিদের ইমাম ও খতিবের দায়িত্ব পালন করেছেন। মসজিদের উন্নয়নে দেশ ও প্রবাস থেকে ফান্ড সংগ্রহ করে অসম্পূর্ণ কাজ সম্পন্ন করতে আমৃত্যু পরিশ্রম করেছেন।
                </p>
              </div>
            </div>

            {/* Final Moments Note */}
            <div className="mt-8 p-8 bg-[#FFF9E6] rounded-3xl border-l-8 border-[#F4C430] shadow-md">
              <h4 className="text-[#1F7A4D] font-bold text-xl mb-3 flex items-center gap-2">
                <FaClock className="text-[#F4C430]" /> শেষ বিদায়
              </h4>
              <p className="text-gray-700 leading-relaxed text-sm italic font-medium">
                ২৭ ফেব্রুয়ারি ২০২৪, মঙ্গলবার বিকাল ৪:১০ মিনিটে ৬১ বছর বয়সে তিনি ইন্তেকাল করেন। হযরত শাহ্ আজম রহ. দরগাহ্ সংলগ্ন মাঠে বিশাল জানাজার পর তাঁকে তাঁর দাদার স্মৃতি বিজড়িত মসজিদের পাশেই দাফন করা হয়।
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Biography;