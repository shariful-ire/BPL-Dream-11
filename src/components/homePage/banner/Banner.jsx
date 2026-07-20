import bannerbg from "../../../assets/bg-shadow.png";
import bannerimg from "../../../assets/banner-main.png";

const Banner = () => {
  return (
    <div
      className="hero h-[380px] w-[80%] mx-auto"
      style={{
        backgroundImage: `url(${bannerbg})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content text-neutral-content text-center">
        <div className="w-full">

          <img 
            src={bannerimg}
            className="mx-auto pb-5 h-[151px]"
            >

          </img>
          <h1 className="mb-5 text-3xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          <p className="mb-5">
            Beyond Boundaries Beyond Limits
          </p>

          <button className="btn btn-primary p-0.5 border-2 m-0.5 text-black bg-[hsl(60,79%,58%)]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;