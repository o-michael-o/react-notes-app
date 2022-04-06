import Note from "../Note/Notes";

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note key={note.id} text={note.text} date={note.date} />
      ))}
    </div>
  );
};

export default NotesList;
