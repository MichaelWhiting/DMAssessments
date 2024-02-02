function ModeButtons({isEditing, toggleEditing, deleteMovie, updateMovie}) {
    return isEditing ? (
        <>
            <br/>
            <button onClick={updateMovie}>Save</button>
        </>
    ) : (
        <>
            <button id="edit-btn" onClick={toggleEditing}>
                <img id="edit-img" src="https://cdn3.iconfinder.com/data/icons/feather-5/24/edit-512.png"/>
            </button>
            <button id="delete-btn" onClick={deleteMovie}>
                <img id="delete-img" src="https://cdn-icons-png.flaticon.com/512/3515/3515498.png"/>
            </button>
        </>
    )
}


export default ModeButtons;