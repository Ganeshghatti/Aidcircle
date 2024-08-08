import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import ReactHtmlParser from "react-html-parser";
import { CampDetail } from "../data";
import ProgressBar from "../components/progress-bar";

const CustomNextArrow = (props) => (
  <button
    // eslint-disable-next-line react/prop-types
    onClick={props.onClick}
    className="absolute bottom-0 right-0 top-0 cursor-pointer bg-black/10"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M15 30L25 20L15 10"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const CustomPrevArrow = (props) => (
  <button
    // eslint-disable-next-line react/prop-types
    onClick={props.onClick}
    className="absolute bottom-0 top-0 z-10 cursor-pointer bg-black/10"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M25 10L15 20L25 30"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const CampaignDetails = () => {
  const { link } = useParams();

  const [parsedData, setParsedData] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2, // Default for desktop
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 3000, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Desktop
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Tablet
      { breakpoint: 464, settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Mobile
    ],
  };

  const scrollToSection = (section) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      window.location.hash = section;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://mediways-server.vercel.app/user/get-campaign-details/${link}`,
      );
      setParsedData(response.data.campaign);
    };

    fetchData();
  }, []);

  return (
    <div className="relative mx-auto flex max-w-screen-2xl flex-col justify-center pb-10 pt-32 md:flex-row md:px-32">
      <div className="h-full md:w-[65%]">
        <Slider
          {...settings}
          className="w-[100%] rounded-lg border"
          customLeftArrow={<CustomPrevArrow />}
          customRightArrow={<CustomNextArrow />}
        >
          {parsedData?.carousel.map((index, item) => (
            <div key={index} className="relative h-full rounded-lg border">
              <img
                key={index}
                src={parsedData?.carousel[item]}
                className="rounded-lg"
              />
            </div>
          ))}
        </Slider>
        <div className="scroll mt-8 h-full border bg-white">
          <div className="my-5 flex w-full border-t-4 border-t-skyBlue">
            {CampDetail.map((item, index) => (
              <a
                key={index}
                className="flex-1"
                onClick={() => scrollToSection(item.link)}
              >
                <h1 className="family-manrope mx-[1px] flex-1 cursor-pointer bg-transparent p-5 text-center font-bold text-darkBlue">
                  {item.title}
                </h1>
              </a>
            ))}
          </div>
          <div id="details" className="px-2 py-5">
            <h1 className="family-sora text-3xl font-bold">Details :</h1>
            <div className="pt-3">{ReactHtmlParser(parsedData?.content)}</div>
          </div>
          <div id="documents" className="px-2">
            <h1 className="family-sora text-3xl font-bold">Documents :</h1>
            <div className="pt-3">{ReactHtmlParser(parsedData?.content)}</div>
          </div>
          <div id="updates" className="px-2 py-5">
            <h1 className="family-sora text-3xl font-bold">Updates:</h1>
            <div className="pt-3">{ReactHtmlParser(parsedData?.content)}</div>
          </div>
        </div>
      </div>
      <aside className="relative order-first space-y-3 p-5 md:order-none md:h-screen">
        <div className="space-y-4 rounded-lg bg-transparent p-5">
          <p className="family-poppins text-xs font-normal">
            {parsedData?.createdAt}
          </p>
          <h1 className="family-manrope text-xl font-bold leading-7 text-darkBlue">
            {parsedData?.title}
          </h1>
          <p className="family-poppins text-sm font-normal">
            Donate via UPI & Bank Transfer (INR Only)
          </p>
        </div>
        <div className="space-y-4 rounded-lg bg-transparent p-5">
          <h1 className="family-manrope text-xl font-bold leading-7 text-darkBlue">
            Donation Details :
          </h1>
          <ProgressBar target={parsedData?.amount} donated={15621} />
        </div>
      </aside>
    </div>
  );
};

export default CampaignDetails;
