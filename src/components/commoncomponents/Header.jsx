import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <header className="bg-[#E8F5E9] border-b border-[#C8E6C9]">
      <Container>
        <div className="text-center px-4">

          {/* Arabic Title */}
          <h2 className="text-[#374151] text-lg sm:text-xl md:text-2xl font-medium pt-3">
            مدرسة تعمير الملة الكامل
          </h2>

          {/* Bangla Main Title */}
          <h2 className="text-[#1F7A4D] text-xl sm:text-2xl md:text-3xl font-semibold pt-3">
            হযরত শাহ্ আজম রহ. হিফজুল কোরআন দরগাহ্ মডেল মাদ্রাসা
          </h2>

          {/* English Title */}
          <h3 className="text-[#374151] text-base sm:text-lg md:text-xl font-semibold pt-2">
            Hazrat Shah Azam Rah: Hifzul Quran Dorgah Model Madrasah
          </h3>

          {/* Established Info */}
          <h3 className="text-[#F4C430] text-sm sm:text-base md:text-lg font-semibold pt-2">
            স্থাপিতঃ ২০১৮ ইংরেজী ১৪৩৯-৪০ হিজরী।
          </h3>

          {/* Meta Info */}
          <h3 className="text-[#1F7A4D] text-xs sm:text-sm md:text-base font-semibold pt-3 pb-4 leading-relaxed">
            | কেন্দ্র কোড : ১৩০ | মাদ্রাসা কোড : ১১২৪৬ | Hotline : 09617880099 |
            Office Time: 8:00 AM থেকে 5:00 PM
          </h3>

        </div>
      </Container>
    </header>
  );
};

export default Header;
