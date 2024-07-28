import { ImageSlider } from "../components";
import { CarouselData } from "../data";

const Carousel = () => {
  return (
    <div>
      <ImageSlider sliderArray={CarouselData} />
    </div>
  );
};

export default Carousel;
