import React, { useState } from "react";
import "./styles.css";
import Header from "./Components/header.js";
import Footer from "./Components/footer.js";
import CreateArea from "./Components/CreateArea.js";
import NotesSection from "./Section/notesSection";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteitem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="main">
      <Header />
      <CreateArea onAdd={addNote} />
      <NotesSection notes={notes} deleteNote={deleteNote} />
      <Footer />
    </div>
  );
}

export default App;
