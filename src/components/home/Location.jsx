import React from "react";
import Container from "./../commoncomponents/Container";

const Location = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-[40%60%]">

          {/* Left content */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Our Location
            </h2>
            <p className="text-gray-600">
              Find us easily on Google Map.
            </p>
          </div>

          {/* Map */}
          <div className="w-full h-[500px] md:h-[500px] rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d721.2136996377177!2d91.84285661596769!3d24.357326028154343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37519d56428d52d9%3A0xc32b3406b0fafc91!2z4Ka54Kav4Kaw4KakIOCmtuCmvuCmuSDgpobgppzgpq4gKOCmsOCmueCmgykg4Kau4Ka-4Kac4Ka-4KawIOCmtuCmsOCngOCmqw!5e0!3m2!1sen!2sbd!4v1766134023044!5m2!1sen!2sbd"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Location;
