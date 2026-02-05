import Navbar from "./Navbar";
import car from "../assets/car.jpg";

function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${car})` }}
    >
      
      <div className="absolute inset-0 bg-black/40 z-10"></div>
        <Navbar />
      <div className="relative z-20 max-w-[1280px] w-full mx-auto p-4 pt-[80px] sm:pt-[150px] md:pt-[250px]">
        <div className="h-full flex flex-col gap-4 text-white">
          <div>
            <p className="text-sm">
              Quality auto detailing in The Greater Houston area
            </p>
            <h1 className="text-7xl md:text-8xl">
              Driven By <br /> Perfection
            </h1>
          </div>

          <div className="pt-5">
            <button className="border rounded w-[200px] bg-white text-black p-[5px]">
              Book an appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
