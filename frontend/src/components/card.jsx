// eslint-disable-next-line react/prop-types
const Card = ({ title, description, link, icon }) => {
  return (
    <div className="flex flex-col w-full h-[25rem] max-w-sm border border-skyBlue rounded-3xl text-center py-10 bg-transparent">
      <img src={`${icon}`} className="h-[4rem] w-auto m-auto" />
      <h1 className="text-darkBlue font-bold family-sora text-[1.512rem] pt-10 pb-5">
        {title}
      </h1>
      <p className="text-muted font-normal family-poppins text-[0.756rem] pb-16 px-12">
        {description}
      </p>
      <a
        className="text-skyBlue font-bold family-poppins text-[0.945rem]"
        href={`${link}`}
      >
        Learn More
      </a>
    </div>
  );
};

export default Card;
