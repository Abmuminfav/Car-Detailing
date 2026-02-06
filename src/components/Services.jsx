import prosche from "../assets/porsche.jpg"
import enzo from "../assets/enzo.jpg"
import mazda from "../assets/mazda.jpg"
function Services(){
    return(
       <div className="bg-[#161a1d]">
  <div className="min-h-screen max-w-[1280px] mx-auto flex flex-col justify-center items-center gap-10 px-4">
    
    <h1 className="text-center text-5xl">Popular Services</h1>

    <div className="flex flex-col md:flex-row gap-6 text-center items-center">
      <div className="flex flex-col gap-2">
        <img src={enzo} className="h-[300px] w-[300px] object-cover rounded-md" />
        <h1>Full Interior Detailing</h1>
      </div>

      <div className="flex flex-col gap-2">
        <img src={prosche} className="h-[300px] w-[300px] object-cover rounded-md" />
        <h1>Ceramic Coating</h1>
      </div>

      <div className="flex flex-col gap-2">
        <img src={mazda} className="h-[300px] w-[300px] object-cover rounded-md" />
        <h1>Premium Wash</h1>
      </div>
    </div>

    <button className="border p-3 rounded">View all Services</button>
  </div>
</div>

    )
};

export default Services;