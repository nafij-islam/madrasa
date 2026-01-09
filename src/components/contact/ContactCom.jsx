import React, { useEffect } from "react";
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe, 
  FaFacebook, FaWhatsapp, FaYoutube, FaBuilding, FaRoad 
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "./../commoncomponents/Container";

const ContactDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex justify-center items-center gap-2 mb-3">
            <div className="h-[2px] w-8 bg-[#F4C430]"></div>
            <span className="text-[#F4C430] font-bold uppercase tracking-widest text-sm">যোগাযোগের তথ্য</span>
            <div className="h-[2px] w-8 bg-[#F4C430]"></div>
          </div>
          <h2 className="text-[#1F7A4D] text-3xl md:text-5xl font-black mb-4">আমাদের সাথে যুক্ত হোন</h2>
          <p className="text-gray-500 font-medium max-w-xl mx-auto italic">
            "যেকোনো প্রয়োজনে সরাসরি আমাদের অফিসে যোগাযোগ করার জন্য নিচের তথ্যগুলো ব্যবহার করুন"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* ১. ঠিকানা কার্ড (গ্রাম, জেলা, রোড) */}
          <div className="bg-[#F9FBF9] p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all" data-aos="fade-up">
            <div className="w-14 h-14 bg-[#1F7A4D] text-[#F4C430] rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
              <FaBuilding />
            </div>
            <h3 className="text-[#1F7A4D] text-2xl font-black mb-4">বিস্তারিত ঠিকানা</h3>
            <ul className="space-y-4 text-gray-700 font-medium">
              <li className="flex items-start gap-3">
                <FaRoad className="mt-1 text-[#F4C430]" />
                <span>রোড নম্বর: ১২, হাউজ নম্বর: ০৫</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#F4C430]" />
                <span>গ্রাম/মহল্লা: দরগাহ পাড়া</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#F4C430]" />
                <span>উপজেলা ও জেলা: সাভার, ঢাকা</span>
              </li>
            </ul>
          </div>

          {/* ২. ফোন ও অনলাইন কার্ড */}
          <div className="bg-white p-8 rounded-[2.5rem] border-2 border-[#E8F5E9] shadow-sm hover:shadow-xl transition-all relative overflow-hidden" data-aos="fade-up" data-aos-delay="200">
             <div className="absolute top-0 right-0 w-24 h-24 bg-[#F4C430]/10 rounded-full -mr-12 -mt-12"></div>
            <div className="w-14 h-14 bg-[#F4C430] text-[#1F7A4D] rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg">
              <FaPhoneAlt />
            </div>
            <h3 className="text-[#1F7A4D] text-2xl font-black mb-4">কল ও ইমেইল</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold tracking-widest">ফোন নম্বর</p>
                <p className="text-xl font-black text-gray-800">09617880099</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold tracking-widest">হোয়াটসঅ্যাপ</p>
                <p className="text-xl font-black text-gray-800">017XX-XXXXXX</p>
              </div>
              <div>
                <p className="text-xs uppercase text-gray-400 font-bold tracking-widest">অফিসিয়াল ইমেইল</p>
                <p className="text-lg font-bold text-[#1F7A4D]">info@madrasah.com</p>
              </div>
            </div>
          </div>

          {/* ৩. সোশ্যাল মিডিয়া ও সময় */}
          <div className="bg-[#1F7A4D] p-8 rounded-[2.5rem] text-white shadow-xl flex flex-col justify-between" data-aos="fade-up" data-aos-delay="400">
            <div>
              <h3 className="text-2xl font-black mb-6 text-[#F4C430]">সোশ্যাল মিডিয়া</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all text-xl"><FaFacebook /></a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all text-xl"><FaYoutube /></a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all text-xl"><FaWhatsapp /></a>
                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all text-xl"><FaGlobe /></a>
              </div>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
              <p className="text-[#F4C430] font-bold text-sm uppercase tracking-widest mb-1">অফিস টাইম</p>
              <p className="font-bold text-lg">শনিবার - বৃহস্পতিবার</p>
              <p className="text-sm opacity-70">সকাল ৯:০০ - বিকাল ৫:০০</p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ContactDetail;