import { FaStar } from "react-icons/fa6"

function ReviewCard({name, text, rating}){
    return(
        <div className="bg-white/10 backdrop-blur-md border text-white border-white/20 rounded-xl p-6 h-full">
            <h4 className="text-lg font-semibold  md-2">{name}</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{text}</p>
            <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className={ index < rating ? "text-yellow-400" : "text-gray-600"}/>
                ))}
            </div>
        </div>
    )
}

export default ReviewCard