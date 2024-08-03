import { useState, useEffect } from "react";
import axios from "axios";

const SpecialitiesPage = () => {
  const [data, setData] = useState(null);

  const [param, setParam] = useState("heart-transplant");

  const [detailData, setDetailData] = useState();

  const handleParam = (item) => {
    setParam(item.link);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://mediways-server.vercel.app/user/get-all-specialties",
        );
        setData(response.data.specialities);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchDetailedData = async () => {
      if (param) {
        const response = await axios.get(
          `http://mediways-server.vercel.app/user/get-speciality-details/${param}`,
        );
        await setDetailData(response.data.speciality);
        console.log(param);
        console.log(detailData);
      }
    };

    fetchDetailedData();
  }, [param, setDetailData]);

  return (
    <div className="flex pt-[8rem]">
      <aside className="hidden h-screen w-[40%] p-5 sm:block">
        <div className="flex w-fit flex-col flex-wrap space-y-6 rounded-lg border-2 border-lightBlue bg-transparent px-3 py-3">
          {data?.map((item, index) => (
            <div
              key={index}
              className="mr-[1rem] flex w-fit flex-initial cursor-pointer items-center space-x-3 rounded-lg border border-black bg-white py-3 pl-2 pr-9"
              onClick={() => handleParam(item)}
            >
              <img src={item.icon} className="h-[1.584rem] w-[1.584rem]" />
              <h1 className="family-sora bg-white py-1 text-[0.9rem] font-bold text-darkBlue">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </aside>
      <div className="p-5">
        <h1 className="family-sora text-[3.5rem] font-semibold">
          {detailData?.title}
        </h1>
        <img
          src={detailData?.wallpaperimg}
          className="mt-5 h-4/5 w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default SpecialitiesPage;
