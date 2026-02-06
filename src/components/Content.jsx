import corv from "../assets/corvete.jpg"
function Content(){
    return(
        <div className="bg-black">
            <div className="h-screen max-w-[1280px] mx-auto flex flex-col md:flex-row items-center p-4 gap-10">
                <div className="md:w-1/2">
                    <h1 className="text-center text-3xl mb-4 md:text-start">About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro quae, illum harum inventore nobis? Velit at accusamus nesciunt inventore, eligendi, fugiat amet dolor labore earum sit unde exercitationem facilis?</p>
                </div>
                <div>
                    <img src={corv} className=" w-full h-[300px] md:h-[400px] rounded-md"/>
                </div>
            </div>
        </div>
    )
}

export default Content;