import { Heading, Card } from "../components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Specialities = () => {
  const [data, setData] = useState(null);

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

  return (
    <div className="overflow-x-hidden py-10">
      <Heading
        title={"Specialities"}
        subtitle={
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula aenean massa."
        }
        pretitle={"Our Specialities"}
      />
      <div className="mx-auto my-10 flex max-w-screen-2xl flex-wrap items-center justify-center gap-5 px-5 md:px-20">
        {data?.map((item, index) => (
          <Link key={index} to={`/specialities/${item.link}`}>
            <Card
              title={item.title}
              description={item.desc}
              link={item.link}
              icon={item.icon}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Specialities;
