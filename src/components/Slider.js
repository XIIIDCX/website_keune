import { Navigation, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineRight } from "react-icons/ai";
import { GiCircle } from "react-icons/gi";
import images from "../constants/images";
import "../index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade]}
      effect={"fade"}
      speed={800}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      navigation={true}
      className="w-full h-full"
      onSlideChange
    >
      <SwiperSlide className="">
        <div className="">
          {/* IMAGE */}
          <img
            className="block h-auto w-full object-cover object-top"
            src={images.slide1}
            alt="slide1"
          ></img>

          {/* TEXT CONTAINER */}
          <div className="">
            <div className="absolute bottom-16 left-4 md:left-12 md:h-1/2 lg:h-3/5 xl:h-4/6 lg:left-16 xl:left-24  cursor-default ">
              <div className=" md:pr-10 relative">
                <div className="container">
                  <div className="absolute h-[0.5px] w-8 bg-white -m-3 mt-1 origin-16 -rotate-45 opacity-50 md:-m-6 md:mt-11 md:w-28 lg:mt-14 lg:w-32 xl:origin-18 xl:w-36"></div>
                  <div className="mb-1 md:mb-6 xl:mb-8 text-2xl md:text-6xl lg:text-7xl xl:text-8xl  text-white font-light ">
                    o1.
                  </div>
                </div>
              </div>

              {/* MAIN TEXT */}
              <div className="text-white text-xs md:text-3xl lg:text-4xl xl:text-6xl font-light leading-3 md:leading-6 ">
                Bez kompromisu.
              </div>
              <div className="text-white text-xs md:text-3xl lg:text-4xl xl:text-6xl font-light ">
                Idealnie takie jak lubisz.
              </div>
              <div className="text-white text-[5px] md:text-sm lg:text-lg lg:mt-1 xl:ml-0.5 font-light">
                KENUE
                <span className="ml-0.5 lg:ml-2 font-normal">DESIGN</span>
              </div>

              {/* ARROW CONTAINER */}
              <div className="absolute -bottom-4 -left-3 w-2/3 md:bottom-10 md:-left-6 lg:bottom-32 lg:-left-8 xl:bottom-72 xl:-left-16 transition ease-in-out delay-150 hover:translate-x-1 hover:scale-110 duration-300 cursor-pointer">
                <div className="flex items-center justify-evenly ">
                  {/* LINE */}
                  <div className="bg-white h-[0.5px] w-10 md:w-28 lg:w-32 xl:w-44"></div>
                  {/* CIRCLE ICON */}
                  <div className="relative right-1 bottom-2 md:text-3xl md:right-2 md:bottom-4 lg:right-3 lg:bottom-5 lg:text-4xl xl:text-7xl xl:bottom-9 xl:right-9 ">
                    <GiCircle className="text-white absolute opacity-50" />
                    <AiOutlineRight className="text-white absolute text-[8px] left-1 top-1 md:left-3 md:top-[11px] lg:left-[14px] lg:top-[14px] xl:text-sm xl:top-7 xl:left-7" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* SLIDE 2 */}
      <SwiperSlide className="">
        <div className="">
          {/* IMAGE */}
          <img
            className="block h-auto w-full object-cover object-top"
            src={images.slide2}
            alt="slide2"
          ></img>

          {/* TEXT CONTAINER */}
          <div className="">
            <div className="absolute bottom-16 left-4 md:left-12 md:h-1/2 lg:h-3/5 xl:h-4/6 lg:left-16 xl:left-24  cursor-default ">
              <div className=" md:pr-10 relative">
                <div className="container">
                  <div className="absolute h-[0.5px] w-8 bg-black -m-3 mt-1 origin-16 -rotate-45 opacity-50 md:-m-6 md:mt-11 md:w-28 lg:mt-14 lg:w-32 xl:origin-18 xl:w-36"></div>
                  <div className="mb-1 md:mb-6 xl:mb-8 text-2xl md:text-6xl lg:text-7xl xl:text-8xl  text-black font-light drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)] ">
                    o1.
                  </div>
                </div>
              </div>

              {/* MAIN TEXT */}
              <div className="text-black text-xs md:text-3xl lg:text-4xl xl:text-6xl font-light leading-3 md:leading-6 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                Bez kompromisu.
              </div>
              <div className="text-black text-xs md:text-3xl lg:text-4xl xl:text-6xl font-light drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                Idealnie takie jak lubisz.
              </div>
              <div className="text-black text-[5px] md:text-sm lg:text-lg lg:mt-1 xl:ml-0.5 font-light drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                KENUE
                <span className="ml-0.5 lg:ml-2 font-normal drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
                  DESIGN
                </span>
              </div>

              {/* ARROW CONTAINER */}
              <div className="absolute -bottom-4 -left-3 w-2/3 md:bottom-10 md:-left-6 lg:bottom-32 lg:-left-8 xl:bottom-72 xl:-left-16 transition ease-in-out delay-150 hover:translate-x-1 hover:scale-110 duration-300 cursor-pointer">
                <div className="flex items-center justify-evenly ">
                  {/* LINE */}
                  <div className="bg-black h-[0.5px] w-10 md:w-28 lg:w-32 xl:w-44"></div>
                  {/* CIRCLE ICON */}
                  <div className="relative right-1 bottom-2 md:text-3xl md:right-2 md:bottom-4 lg:right-3 lg:bottom-5 lg:text-4xl xl:text-7xl xl:bottom-9 xl:right-9 ">
                    <GiCircle className="text-black absolute opacity-50" />
                    <AiOutlineRight className="text-black absolute text-[8px] left-1 top-1 md:left-3 md:top-[11px] lg:left-[14px] lg:top-[14px] xl:text-sm xl:top-7 xl:left-7" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
