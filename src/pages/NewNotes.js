import React, { useState } from "react";
import './NewNotes.scss';

function NewNotes() {
    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    return (
        <div className="createPostPage">
        <div className="cpContainer">
            <h1>Text Output</h1>
            <div className="inputGp">
            <label> Title:</label>
            <input
                placeholder="Name this doc"
                onChange={(event) => {
                setTitle(event.target.value);
                }}
            />
            </div>
            <div className="inputGp">
            <label> Post:</label>
                <div contenteditable="true" className='text'>
                    Noteshelf
                    Our submission for stormhacks 2022
                </div>
            </div>
            <form action='/mynotes' className="addfile">
                <button type="submit">Save Post</button>
            </form>
        </div>
        </div>
  );
}


export default NewNotes