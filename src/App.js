import React, { useState } from "react";
import "./styles.css";
import Header from "./Components/header.js";
import Footer from "./Components/footer.js";
import Note from "./Components/note.js";
import CreateArea from "./Components/CreateArea.js";
//import axios from "axios";
//import notes from "./notes";

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
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
