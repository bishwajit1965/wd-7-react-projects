import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-3/4">
        <img src={banner1} className="w-full h-3/4 object-cover rounded-lg" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
          <div className="">
            <h2 className="text-6xl font-extrabold text-white">
              Affordable Price For Car Servicing
            </h2>
          </div>
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-3/4">
        <img src={banner2} className="w-full h-3/4 object-cover rounded-lg" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-3/4">
        <img src={banner3} className="w-full h-3/4 object-cover rounded-lg" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-3/4">
        <img src={banner4} className="w-full h-3/4 object-cover rounded-lg" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 space-x-5">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
