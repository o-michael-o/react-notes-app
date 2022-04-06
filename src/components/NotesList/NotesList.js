import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote />
    </div>
  );
};

export default NotesList;
