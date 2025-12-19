import React from "react";
import Container from "../commoncomponents/Container";

// demo images (নিজের ছবি path বসাবে)
import img1 from "../../assets/gallery/img1.jpg";
import img2 from "../../assets/gallery/img2.jpg";
import img3 from "../../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.jpg";

const MadrasaGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        {/* Section title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#026670]">
            Madrasa Gallery
          </h2>
          <p className="text-gray-600 mt-2">
            আমাদের মাদ্রাসার সুন্দর মুহূর্তসমূহ
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[250px] object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MadrasaGallery;
