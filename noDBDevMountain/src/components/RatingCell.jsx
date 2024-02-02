
function RatingCell({isEditing, rating, setRating}) {

    return isEditing ? (
        <input type="number" value={rating} placeholder="Rating out of 10" onChange={e => setRating(e.target.value)}/>
    ) : (
        <p>{rating}/10</p>
    )
}

export default RatingCell;