import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const charLimit = 200;

  const handleChange = (evt) => {
    if (charLimit - evt.target.value.length >= 0) {
      setNoteText(evt.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        name=""
        id=""
        cols="10"
        rows="8"
        placeholder="Add a new note"
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} remaining</small>
        <button type="button" className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
