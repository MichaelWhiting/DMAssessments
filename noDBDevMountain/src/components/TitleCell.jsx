
function TitleCell({isEditing, title, setTitle}) {

    return isEditing ? (
        <input type="text" value={title} placeholder="Movie Title" onChange={e => setTitle(e.target.value)}/>
    ) : (
        <h3>{title}</h3>
    )
}

export default TitleCell;