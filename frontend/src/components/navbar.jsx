import { NavbarData } from "../data";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    setToggleNavbar(!toggleNavbar);
  };

  const handleClick = (item) => {
    navigate(item.link);
  };

  return (
    <div className="max-w-screen fixed z-10 mx-auto flex h-[8rem] w-screen justify-center bg-white px-2.5 shadow-md lg:px-20">
      <div className="flex items-center justify-center">
        <img
          src={"logo.png"}
          className="h-48 w-48 cursor-pointer object-contain"
          onClick={() => navigate("/")}
        />
      </div>
      <ul className="my-auto hidden h-full w-full flex-1 items-center justify-center space-x-12 pl-[2rem] lg:flex">
        {NavbarData.map((item, index) => (
          <li
            key={index}
            className={`family-manrope cursor-pointer text-[15px] font-bold tracking-wide text-darkBlue transition hover:text-lightBlue`}
            onClick={() => handleClick(item)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="hidden items-center lg:flex">
        <button className="family-sora h-[3.4rem] w-[16rem] rounded-full border bg-lightBlue text-[1rem] font-semibold text-white active:bg-lightBlue/95">
          Make an Appointment
        </button>
      </div>
      <div className="flex w-full justify-end py-5 lg:hidden">
        <button onClick={handleToggle} className="z-10">
          <MenuIcon />
        </button>
        <div>
          {toggleNavbar && (
            <div className="">
              <ul className="absolute right-0 flex h-screen w-[70%] flex-col items-center justify-center space-y-10 border-2 border-white bg-white p-4 shadow-md">
                {NavbarData.map((item, index) => (
                  <li
                    key={index}
                    className="family-manrope cursor-pointer text-[15px] font-bold tracking-wide text-darkBlue"
                  >
                    {item.title}
                  </li>
                ))}
                <button className="family-sora h-[3.4rem] w-full rounded-full border bg-lightBlue text-[1rem] font-semibold text-white">
                  Make an Appointment
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
