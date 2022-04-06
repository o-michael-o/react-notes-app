import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  // const date = new Date();
  // const dateStr = `${date.getDate()} ${date.getMonth()}`;

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3rem"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};
export default Note;
