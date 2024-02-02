function ModeButtons({isEditing, toggleEditing, deleteMovie}) {
    return isEditing ? (
        <>
            <br/>
            <button onClick={toggleEditing}>Save</button>
        </>
    ) : (
        <>
            <button onClick={toggleEditing}>Edit</button>
            <button onClick={deleteMovie}>Delete</button>
        </>
    )
}

export default ModeButtons;