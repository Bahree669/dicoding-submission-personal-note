import NoteCard from "../NoteCard/NoteCard";
import NoNotes from "../NoNotes/NoNotes";

function Notes({ notes }) {
    if (!notes.length) return <NoNotes />;

    return (
        <section className='notes'>
            {notes.map((note) => (
                <NoteCard note={note} key={note.id} />
            ))}
        </section>
    );
}

export default Notes;
