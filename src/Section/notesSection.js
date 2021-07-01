import Note from "../Components/note";

const NotesSection = ({ notes, deleteNote }) => {
  console.log(notes);
  return (
    <div>
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
    </div>
  );
};

export default NotesSection;
