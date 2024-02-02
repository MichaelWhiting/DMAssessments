
function RatingCell({isEditing, rating, setRating}) {
    const arr = [...Array(Math.round(rating)).keys()].splice(0,5)
    const stars = arr.map((num) => {
        return (
            <img key={num} className="star-img" src="https://static.vecteezy.com/system/resources/previews/023/258/446/original/a-star-with-transparent-background-sticker-illustration-free-png.png"/>
        )
    })

    return isEditing ? (
        <>
            <p>Rating:</p>
            <input type="number" value={rating} placeholder="Rating out of 10" onChange={e => setRating(e.target.value)}/>
        </>
    ) : (
        <div className="rating-div">
            {stars}
            <p>{rating}/5</p>
        </div>
    )
}

export default RatingCell;