const AddNote = () => {
  return (
    <div className="note new">
      <textarea
        name=""
        id=""
        cols="10"
        rows="8"
        placeholder="Add a new note"
      ></textarea>
      <div className="note-footer">
        <small>200 remaining</small>
        <button type="button" className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
