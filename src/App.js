import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import Header from "./components/Header/Header";
import NotesList from "./components/NotesList/NotesList";
import Search from "./components/Search/Search";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");

  // get notes from local storage when app loads
  useEffect(() => {
    const notesFromLocalStorage = JSON.parse(
      localStorage.getItem("react-notes-app-data")
    );

    if (notesFromLocalStorage) {
      setNotes(notesFromLocalStorage);
    }
  }, []);

  // add a note to state
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(newNotes));
  };

  // delete a note from the state
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem("react-notes-app-data", JSON.stringify(newNotes));
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
