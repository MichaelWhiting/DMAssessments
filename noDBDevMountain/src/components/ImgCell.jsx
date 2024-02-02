
function ImgCell({isEditing, img, setImg}) {
    return isEditing ? (
        <input type="text" value={img}placeholder="Img URL" onChange={e => setImg(e.target.value)}/>
    ) : (
        <img className="movie-img" src={img}/>
    )
}

export default ImgCell;
