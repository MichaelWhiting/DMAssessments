import { useState } from "react";
import ModeButtons from "./ModeButtons";
import DescriptionCell from "./DescriptionCell";
import TitleCell from "./TitleCell";
import ImgCell from "./ImgCell";
import RatingCell from "./RatingCell";

function MovieCell({ movieData, deleteMovie }) {
    const [isEditing, setIsEditing] = useState(false)

    const [title, setTitle] = useState(movieData.title)
    const [img, setImg] = useState(movieData.img)
    const [description, setDescription] = useState(movieData.description)
    const [rating, setRating] = useState(movieData.rating)

    const toggleEditing = () => {
        setIsEditing(!isEditing);
    }

    return (
        <div className="movie-cell"> 
            <TitleCell isEditing={isEditing} title={title} setTitle={setTitle}/>
            <ImgCell isEditing={isEditing} img={img} setImg={setImg}/>
            <DescriptionCell isEditing={isEditing} description={description} setDescription={setDescription}/>
            <RatingCell isEditing={isEditing} rating={rating} setRating={setRating}/>
            <ModeButtons isEditing={isEditing} toggleEditing={toggleEditing} deleteMovie={deleteMovie}/>
        </div>
    )
}

export default MovieCell;