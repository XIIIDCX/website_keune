import { useState } from "react";
import images from "../constants/images";
import { AiOutlineDown } from "react-icons/ai";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  let links = [
    { name: "Nowości", link: "/" },
    { name: "Produkty", link: "/" },
    { name: "Trendy", link: "/" },
    { name: "O firmie", link: "/" },
    { name: "Salony", link: "/" },
    { name: "Dystrybutorzy", link: "/" },
    { name: "Kontakt", link: "/" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-10">
      <div className=" flex justify-between items-center">
        {/* logo */}
        <img
          src={images.logo_white}
          alt="logo"
          className="h-6 mx-2 my-2 sm:h-10 sm:mx-4 sm:my-3 lg:h-12 lg:mx-6 lg:my-4 xl:h-16 xl:mx-10 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        ></img>

        {/* links */}
        <div className="flex justify-between items-center">
          <ul className="hidden lg:flex">
            {links.map((link) => (
              <li
                key={link.name}
                className="flex text-white justify-between items-center tracking-wide pt-4 text-lg lg:px-0 xl:px-5 xl:text-xl font-light transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <a href={link.link}>
                  <div className="flex justify-center peer drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    {link.name}
                  </div>

                  {/* icon down */}
                  <AiOutlineDown className="text-xs mx-10 invisible peer-hover:visible drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
                </a>
              </li>
            ))}
          </ul>

          {/* social media */}
          <div className=" invisible lg:visible relative h-10 w-10 mx-6 xl:mx-12">
            <img
              className="absolute h-4 top-0 right-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              src={images.fb_white}
              alt="facebook"
            ></img>
            <img
              className="absolute h-3 w-3 top-4 left-0 cursor-pointer transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-150 duration-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              src={images.twitter_white}
              alt="twitter"
            ></img>
            <img
              className="absolute h-3 w-3 top-4 right-0 cursor-pointer transition ease-in-out delay-150 hover:translate-x-1 hover:scale-150 duration-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              src={images.yt_white}
              alt="youtube"
            ></img>
            <img
              className="absolute h-3 w-3 bottom-0 right-3 cursor-pointer transition ease-in-out delay-150 hover:translate-y-1 hover:scale-150 duration-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              src={images.insta_white}
              alt="instagram"
            ></img>
          </div>

          {/* dropdown menu icon */}
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className=" lg:hidden relative my-2 mr-4 rounded cursor-pointer"
          >
            <div className="w-4 h-px mb-1 sm:w-7 sm:h-0.5 sm:mb-2 bg-white rounded"></div>
            <div className="w-4 h-px mb-1 sm:w-7 sm:h-0.5 sm:mb-2 bg-white rounded"></div>
            <div className="w-4 h-px sm:w-7 sm:h-0.5 bg-white rounded"></div>

            {/* dropdown menu */}
            <div className="absolute right-0">
              <ul className="flex flex-col items-end text-base cursor-pointer text-white font-light pt-2 md:pt-1">
                {showSidebar &&
                  links.map((link) => (
                    <li
                      key={link.name}
                      className="my-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-sm md:text-lg "
                      onClick={() => setShowSidebar(false)}
                    >
                      <a href={link.link}>
                        <div className="peer ">{link.name}</div>
                        <div className="invisible bg-white w-30 h-[0.5px] rounded text-white peer-hover:visible"></div>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
