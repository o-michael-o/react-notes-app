import { useState } from "react";
import { nanoid } from "nanoid";

import Header from "./components/Header/Header";
import NotesList from "./components/NotesList/NotesList";
import Search from "./components/Search/Search";

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

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
