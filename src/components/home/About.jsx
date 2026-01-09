import React from "react";
import Container from "./../commoncomponents/Container";
import dada from "../../assets/dada ajmi.jpeg";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* বাম পাশ: বর্ণনা (About Text) */}
          <div className="w-full lg:w-[65%] order-2 lg:order-1">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h4 className="text-[#F4C430] font-bold tracking-widest uppercase text-sm mb-2">আমাদের কথা</h4>
                <h2 className="text-[#1F7A4D] text-3xl md:text-4xl font-bold mb-4">
                  বিসমিল্লাহির রাহমানির রাহীম
                </h2>
                <div className="h-1 w-24 bg-[#F4C430] mx-auto lg:mx-0"></div>
              </div>

              <div className="text-gray-700 leading-relaxed text-justify space-y-4 text-base md:text-lg">
                <p>
                  আলহামদুলিল্লাহ, ওয়াসসালাতু ওয়াসসালামু আলা রাসূলিল্লাহ। আম্মা বা'দ- সর্বশ্রেষ্ঠ জাতি মুসলিম উম্মাহ। এ জাতি শিক্ষা, সংস্কৃতি, অর্থনীতি, রাজনীতির স্বকীয়তা হারিয়েছে অনেক আগেই। ভেঙ্গে চুরমার হয়েছে ঈমানী-আখলাকী বুনিয়াদ। বৃটিশোত্তর ভারতীয় উপমহাদেশ তার জলন্ত স্বাক্ষী।
                </p>
                <p>
                  বহুমুখি সঙ্কটে নিপতিত হয় ইসলামের লালনভূমি বাংলাদেশ। ক্রমেই হারাতে থাকে ইসলামী মূল্যবোধ ও ঐতিহ্য। হুমকির মুখে পড়ে মুসলিম উম্মাহর নতুন প্রজন্ম। ষাটের দশক। নুয়ে পড়া সে উম্মাহকে জাগিয়ে তুলতে ও স্থবির দেহে প্রাণ ফিরিয়ে আনতে নতুন করে কদম ফেলে আমাদের এই মিশন।
                </p>
                <p className="bg-[#E8F5E9] p-4 border-l-4 border-[#1F7A4D] italic">
                  ইসলাম ও সাধারণ শিক্ষার সমন্বয়ে একটি বাস্তবধর্মী শিক্ষা মিশনে আমাদের পথচলা শুরু হয়। যুগোপযোগী দক্ষ আলিমে দ্বীন এবং সমাজের সর্বস্তরের জন্য দেশপ্রেমিক, সৎ ও যোগ্য নাগরিক তৈরিই আমাদের মূল লক্ষ্য।
                </p>
              </div>
              
              <div className="pt-4 flex justify-center lg:justify-start">
               <Link to={'/biography'}>
                   <button className="bg-[#1F7A4D] text-white px-8 py-3 rounded-full font-bold hover:bg-[#F4C430] hover:text-[#1F7A4D] transition-all shadow-lg">
                  বিস্তারিত জানুন
                </button>
               </Link>
              </div>
            </div>
          </div>

          {/* ডান পাশ: ছবি ও তথ্য (Profile Card) */}
          <div className="w-full lg:w-[35%] order-1 lg:order-2">
            <div className="bg-white border-2 border-[#E8F5E9] rounded-2xl overflow-hidden shadow-xs sticky top-24">
              {/* ছবির অংশ */}
              <div className="p-4">
                <div className="relative group">
                  <img
                    className="w-full h-auto rounded-xl shadow-md border border-gray-100"
                    src={dada}
                    alt="মুফতি শাহ মোহাম্মদ মোশাহিদ আলী আজমী"
                  />
                  <div className="absolute inset-0 bg-[#1F7A4D]/10 group-hover:bg-transparent transition-all duration-300"></div>
                </div>
              </div>

              {/* নাম ও তথ্য */}
              <div className="px-6 pb-8 text-center">
                <h3 className="text-[#1F7A4D] font-bold text-xl mb-3 leading-snug">
                  আলহাজ্ব হযরত মাওলানা মুফতি শাহ মোহাম্মদ মোশাহিদ আলী আজমী রহ.
                </h3>
                
                <div className="bg-[#FFF9E6] rounded-lg py-2 px-4 border border-[#F4C430]/30">
                  <p className="text-[#D97706] font-bold text-sm">
                    জন্মঃ ১ জুলাই ১৯৬৬ | মৃত্যুঃ ২৭ ফেব্রুয়ারী ২০২৪
                  </p>
                </div>
                
                <p className="mt-4 text-gray-500 text-sm font-medium italic">
                  প্রতিষ্ঠাতা ও স্বপ্নদ্রষ্টা
                </p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default About;