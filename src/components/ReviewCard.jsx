function ReviewCard({name, text}){
    return(
        <div className="bg-gray-500 p-6 rounded-lg max-w-sm shadow-md">
            <h4>{name}</h4>
            <p>{text}</p>
        </div>
    )
}

export default ReviewCard