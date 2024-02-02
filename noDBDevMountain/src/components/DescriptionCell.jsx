
function DescriptionCell({isEditing, description, setDescription}) {

    return isEditing ? (
        <>
            <br/>
            <textarea
                value={description} 
                placeholder="Description"
                rows="4"
                cols="30"
                onChange={e => setDescription(e.target.value)}
                >
            </textarea>
        </>
    ) : (
        <p>{description}</p>
    )
}

export default DescriptionCell;