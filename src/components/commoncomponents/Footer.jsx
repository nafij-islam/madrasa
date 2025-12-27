import React from "react";
import { FaFacebook, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Container = ({ children }) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};

const Footer = () => {
  return (
    <footer className="bg-[#EBFFD8] ">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6">
            
            {/* About Section */}
            <div className="text-center sm:text-left">
              <h4 className="text-[#2f328c] text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                আমাদের সম্পর্কে
              </h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                হযরত শাহ্ আজম রহ. হিফজুল কোরআন দরগাহ্ মডেল মাদ্রাসা একটি ইসলামিক শিক্ষা প্রতিষ্ঠান যা ২০১৮ সালে প্রতিষ্ঠিত হয়েছে।
              </p>
            </div>

            {/* Contact Section */}
            <div className="text-center sm:text-left">
              <h4 className="text-[#2f328c] text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                যোগাযোগ
              </h4>
              <div className="space-y-2 text-gray-700 text-sm sm:text-base inline-block sm:block">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <FaPhone className="text-[#76288e] flex-shrink-0" />
                  <span>09617880099</span>
                </div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <FaEnvelope className="text-[#76288e] flex-shrink-0" />
                  <span className="break-all">info@madrasah.edu.bd</span>
                </div>
                <div className="flex items-start gap-2 justify-center sm:justify-start">
                  <FaMapMarkerAlt className="text-[#76288e] mt-1 flex-shrink-0" />
                  <span>ঢাকা, বাংলাদেশ</span>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h4 className="text-[#2f328c] text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                সোশ্যাল মিডিয়া
              </h4>
              <div className="flex gap-4 justify-center sm:justify-start">
                <a 
                  href="#" 
                  className="text-[#76288e] hover:text-[#2f328c] transition-colors transform hover:scale-110 duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebook size={28} className="sm:w-7 sm:h-7" />
                </a>
                <a 
                  href="#" 
                  className="text-[#76288e] hover:text-[#2f328c] transition-colors transform hover:scale-110 duration-200"
                  aria-label="YouTube"
                >
                  <FaYoutube size={28} className="sm:w-7 sm:h-7" />
                </a>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-4 sm:my-6"></div>

          {/* Bottom Section */}
          <div className="text-center space-y-2">
            <p className="text-[#d92020a5] text-xs sm:text-sm md:text-base font-semibold">
              কেন্দ্র কোড : ১৩০ | মাদ্রাসা কোড : ১১২৪৬
            </p>
            <p className="text-gray-600 text-xs sm:text-sm">
              অফিস সময় : সকাল ৮:০০ টা থেকে বিকাল ৫:০০ টা
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed px-4">
              © {new Date().getFullYear()} হযরত শাহ্ আজম রহ. হিফজুল কোরআন দরগাহ্ মডেল মাদ্রাসা। সর্বস্বত্ব সংরক্ষিত।
            </p>
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;