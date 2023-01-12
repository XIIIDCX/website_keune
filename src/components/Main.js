import images from "../constants/images";
import { AiOutlineRight } from "react-icons/ai";

const Main = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-1 md:gap-1">
        {/* MARKI  */}
        <div className="h-60 lg:h-full col-span-1 container justify-center flex items-center cursor-default">
          <div className="flex-col">
            <div className=" md:pr-10 lg:pr-20 relative">
              <div className="">
                <div className="text-6xl lg:text-9xl text-black font-light">
                  o2.
                </div>
                <div className=" h-[0.5px] w-20 lg:w-48 origin-left -rotate-45  opacity-50 bg-black"></div>
              </div>
            </div>
            <div className="pl-9 lg:pl-20 pt-4">
              <div className="text-4xl md:text-4xl lg:text-6xl text-black font-light leading-6 md:leading-6">
                MARKI
              </div>
              <div className="text-4xl md:text-4xl lg:text-6xl text-black font-light">
                KEUNE
              </div>
            </div>
          </div>
        </div>

        {/* CARE */}
        <div className="col-span-2 container relative">
          <div className="cursor-default">
            <img src={images.care} alt="care" className=""></img>
            <div className="absolute bottom-2 left-2 md:bottom-5 md:left-4 lg:bottom-9 lg:left-8 ">
              <div className="text-white text-lg md:text-4xl lg:text-6xl font-light leading-3 md:leading-6 ">
                KEUNE
              </div>
              <div className="text-white text-lg md:text-4xl lg:text-6xl font-light ">
                CARE
              </div>
            </div>
            <div
              className="absolute bottom-2 right-2 w-1/2 md:bottom-4 md:right-4 lg:bottom-8 lg:right-8 md:w-1/3 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-evenly">
                <div className="bg-white h-[0.5px] w-8 md:w-16 lg:w-24"></div>
                <div className="text-white text-[8px] lg:text-[12px] tracking-widest font-light">
                  ODKRYJ SERIE
                </div>
                <AiOutlineRight className="text-white text-[8px]" />
              </div>
            </div>
          </div>
        </div>

        {/* DESIGN */}
        <div className="col-span-1 container relative">
          <div className="">
            <img src={images.design} alt="design"></img>
            <div className="">
              <div className="absolute bottom-8 left-4 md:left-6 lg:left-8 lg:bottom-10 xl:bottom-16  cursor-default ">
                <div className="text-white text-2xl md:text-xl lg:text-4xl xl:text-6xl font-light leading-4 md:leading-4 lg:leading-6 ">
                  KEUNE
                </div>
                <div className="text-white text-2xl md:text-xl lg:text-4xl xl:text-6xl font-light ">
                  DESIGN
                </div>
              </div>
              <div
                className="absolute bottom-5 left-1 w-2/3 md:left-2 lg:bottom-6 xl:bottom-8 xl:left-3 lg:left-6 md:w-4/5
            transition ease-in-out delay-150 hover:translate-x-1 hover:scale-110 duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-evenly">
                  <div className="bg-white h-px w-20 md:w-16 lg:w-32 xl:w-48"></div>
                  <div className="text-white text-[8px] lg:text-xs xl:text-sm tracking-widest font-light">
                    ODKRYJ SERIE
                  </div>
                  <AiOutlineRight className="text-white text-[8px] xl:text-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLEND */}
        <div className="col-span-2 container relative">
          <div className="cursor-default">
            <img src={images.blend} alt="blend" className=""></img>
            <div className="absolute bottom-2 left-2 md:bottom-5 md:left-4 lg:bottom-9 lg:left-8 ">
              <div className="text-white text-lg md:text-4xl lg:text-6xl font-light leading-3 md:leading-6 ">
                KEUNE
              </div>
              <div className="text-white text-lg md:text-4xl lg:text-6xl font-light ">
                BLEND
              </div>
            </div>
            <div
              className="absolute bottom-2 right-2 w-1/2 md:bottom-4 md:right-4 lg:bottom-8 lg:right-8 md:w-1/3 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-evenly">
                <div className="bg-white h-[0.5px] w-8 md:w-16 lg:w-24"></div>
                <div className="text-white text-[8px] lg:text-[12px] tracking-widest font-light">
                  ODKRYJ SERIE
                </div>
                <AiOutlineRight className="text-white text-[8px]" />
              </div>
            </div>
          </div>
        </div>

        {/* KOLORYZACJA */}
        <div className="col-span-2 container relative">
          <div className="cursor-default">
            <img src={images.koloryzacja} alt="koloryzacja" className=""></img>
            <div className="absolute bottom-2 left-2 md:bottom-5 md:left-4 lg:bottom-9 lg:left-8 ">
              <div className="text-white text-lg md:text-4xl lg:text-6xl font-light leading-3 md:leading-6 ">
                KEUNE
              </div>
              <div className="text-white text-lg md:text-4xl lg:text-6xl font-light ">
                KOLORYZACJA
              </div>
            </div>
            <div
              className="absolute bottom-2 right-2 w-1/2 md:bottom-4 md:right-4 lg:bottom-8 lg:right-8 md:w-1/3 
          transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-evenly">
                <div className="bg-white h-[0.5px] w-8 md:w-16 lg:w-24"></div>
                <div className="text-white text-[8px] lg:text-[12px] tracking-widest font-light">
                  ODKRYJ SERIE
                </div>
                <AiOutlineRight className="text-white text-[8px]" />
              </div>
            </div>
          </div>
        </div>

        {/* SO PURE */}
        <div className="col-span-1 container relative">
          <div className="">
            <img src={images.so_pure} alt="so pure"></img>
            <div className="">
              <div className="absolute bottom-8 left-4 md:left-6 lg:left-8 lg:bottom-10 xl:bottom-16  cursor-default ">
                <div className="text-white text-2xl md:text-xl lg:text-4xl xl:text-6xl font-light leading-4 md:leading-4 lg:leading-6 ">
                  KEUNE
                </div>
                <div className="text-white text-2xl md:text-xl lg:text-4xl xl:text-6xl font-light ">
                  SO PURE
                </div>
              </div>
              <div
                className="absolute bottom-5 left-1 w-2/3 md:left-2 lg:bottom-6 xl:bottom-8 xl:left-3 lg:left-6 md:w-4/5
            transition ease-in-out delay-150 hover:translate-x-1 hover:scale-110 duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-evenly">
                  <div className="bg-white h-px w-20 md:w-16 lg:w-32 xl:w-48"></div>
                  <div className="text-white text-[8px] lg:text-xs xl:text-sm tracking-widest font-light">
                    ODKRYJ SERIE
                  </div>
                  <AiOutlineRight className="text-white text-[8px] xl:text-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
