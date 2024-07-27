import { NavbarData } from "../data";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end w-full relative mx-auto max-w-screen-2xl px-2.5 md:px-20">
      <ul className="flex justify-center space-x-12 w-full pl-7.5 py-10">
        {NavbarData.map((item, index) => (
          <li
            key={index}
            className="text-darkBlue font-bold family-manrope text-[15px] tracking-wide cursor-pointer"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
