function ModeButtons({isEditing, toggleEditing, deleteMovie, updateMovie}) {
    return isEditing ? (
        <>
            <br/>
            <button onClick={updateMovie}>Save</button>
        </>
    ) : (
        <>
            <button onClick={toggleEditing}>Edit</button>
            <button onClick={deleteMovie}>Delete</button>
        </>
    )
}

export default ModeButtons;