import React from "react";

const Container = ({ children }) => {
  return <div className="max-w-7xl mx-auto px-4">{children}</div>;
};

const Location = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

          {/* Left content */}
          <div className="lg:col-span-2 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-[#2f328c] text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              আমাদের অবস্থান
            </h2>
            <h3 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2">
              Our Location
            </h3>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              গুগল ম্যাপে আমাদের সহজেই খুঁজে নিন। আমরা আপনার সেবায় সর্বদা প্রস্তুত।
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Find us easily on Google Map. We are always ready to serve you.
            </p>

            {/* Additional Info - Hidden on small screens */}
            <div className="mt-6 space-y-2 hidden sm:block">
              <div className="flex items-center gap-2 text-gray-700 text-sm justify-center lg:justify-start">
                <span className="font-semibold">ঠিকানা:</span>
                <span>ঢাকা, বাংলাদেশ</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 text-sm justify-center lg:justify-start">
                <span className="font-semibold">ফোন:</span>
                <span>09617880099</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.2136996377177!2d91.84285661596769!3d24.357326028154343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37519d56428d52d9%3A0xc32b3406b0fafc91!2z4Ka54Kav4Kaw4KakIOCmtuCmvuCmuCDgpobgppzgpq4gKOCmsOCmueCmgykg4Kau4Ka-4Kac4Ka-4KawIOCmtuCmsOCngOCmqw!5e0!3m2!1sen!2sbd!4v1766134023044!5m2!1sen!2sbd"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hazrat Shah Azam Rah Madrasah Location"
            ></iframe>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Location;