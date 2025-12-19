import React from "react";
import Container from "./../commoncomponents/Container";
import dada from '../../assets/dada ajmi.jpeg'

const About = () => {
  return (
    <section className="py-19">
      <Container>
        <div className="grid grid-cols-[70%30%]">
          <div>
            <div className="text-center">
              <h2 className="text-[30px] font-semibold">Lorem, ipsum dolor</h2>
              <h2 className="text-[40px] text-pink-400 font-bold border-b-[2px] border-gray-400 pb-2">
                Loremipsum dfsdf sdgf
              </h2>
              <p className="pt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque, natus! Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Velit, laboriosam exercitationem. Totam,
                architecto tenetur? Praesentium incidunt explicabo mollitia
                minima ducimus reiciendis dolore optio quod soluta dolorem esse
                deserunt veritatis eius, eos nisi! Adipisci suscipit cumque
                quibusdam laboriosam est cupiditate odio culpa incidunt et, hic
                illum nemo molestiae porro similique optio officia delectus
                eaque omnis accusamus itaque minus facere aspernatur.
              </p>
            </div>
          </div>
          <div>
            {/*      */}
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
                  <div className="font-bold text-xl mb-2">
                    The Coldest Sunset
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
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
