import React from "react";
import Container from "./../commoncomponents/Container";
import dada from "../../assets/dada ajmi.jpeg";

const About = () => {
  return (
    <section className="py-19">
      <Container>
        <div className="grid grid-cols-[70%30%]">
          <div>
            <div className="text-center">
              <h2 className="text-[30px] font-semibold">Lorem, ipsum dolor</h2>
              <h2 className="text-[40px] text-pink-400 font-bold border-b-[2px] border-gray-400 pb-2">
                বিসমিল্লাহির রাহমানির রাহীম
              </h2>
              <p className="pt-5">
                আলহামদুলিল্লাহ, ওয়াসসালাতু ওয়াসসালামু আলা রাসূলিল্লাহ। আম্মা
                বা'দ- সর্বশ্রেষ্ঠ জাতি মুসলিম উম্মাহ। এ জাতি শিক্ষা, সংস্কৃতি,
                অর্থনীতি, রাজনীতির স্বকীয়তা হারিয়েছে অনেক আগেই। ভেঙ্গে চুরমার
                হয়েছে ঈমানী-আখলাকী বুনিয়াদ। বৃটিশোত্তর ভারতীয় উপমহাদেশ তার
                জলন্ত স্বাক্ষী। বহুমুখি সঙ্কটে নিপতিত হয় ইসলামের লালনভূমি
                বাংলাদেশ। ক্রমেই হারাতে থাকে ইসলামী মূল্যবোধ ও ঐতিহ্য। হুমকির
                মুখে পড়ে মুসলিম উম্মাহর নতুন প্রজন্ম। ষাটের দশক। নুয়ে পড়া সে
                উম্মাহকে জাগিয়ে তুলতে ও স্থবির দেহে প্রাণ ফিরিয়ে আনতে নতুন করে
                কদম ফেলে তা‘মীরুল মিল্লাত ট্রাস্ট। ইসলাম ও সাধারণ শিক্ষার
                সমন্বয়ে একটি বাস্তবধর্মী শিক্ষা মিশনে তার পথচলা শুরু হয়।
                অব্যাহত পথচলার ধারাবাহিকতায় ১৯৯৭ সাল থেকে যুক্ত হয় তা‘মীরুল
                মিল্লাত কামিল মাদ্রাসা টঙ্গী। যুগোপযোগী দক্ষ আলিমে দ্বীন এবং
                সমাজের সর্বস্তরের জন্য দেশপ্রেমিক, সৎ ও যোগ্য নাগরিক তৈরি। এ
                মিশনে আত্মনিয়োগ করে বিস্তৃত সবুজ ক্যাম্পাস। পাঠদান শুরু হয়
              </p>
            </div>
          </div>
          <div>
            {/*  */}
            <div>
              <div className="">
                <div className="p-5">
                  <img
                    className="w-full"
                    src={dada}
                    alt="Sunset in the mountains"
                  />
                </div>

                <div className="px-6 text-center">
                  <div className="font-bold text-[20px] mb-2">
                    আলহাজ্ব হযরত মাওলানা মুফতি শাহ মোহাম্মদ মোশাহিদ আলী আজমী
                    ছাহেব রহ.
                  </div>
                  <marquee className="text-[17px] text-red-400 text-base">
                    জন্মঃ ১জুলাই ১৯৬৬ ইংরেজী, মৃত্যু: ২৭ ফেব্রুয়ারী ২০২৪ ইংরেজী.
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
