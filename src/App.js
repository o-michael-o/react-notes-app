import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Learn React.js",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "Build stuff",
      date: "16/04/2022",
    },
    {
      id: nanoid(),
      text: "Get Job",
      date: "17/04/2022",
    },
    {
      id: nanoid(),
      text: "Move House",
      date: "20/06/2022",
    },
  ]);

  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
