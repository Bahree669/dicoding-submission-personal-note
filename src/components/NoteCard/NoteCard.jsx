import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useEffect, useState } from "react";

function NoteCard({ note }) {
    const [parsedBody, setParsedBody] = useState([]);

    useEffect(() => {
        setParsedBody(parse(note.body));
    }, []);

    return (
        <Link to={`/note/${note.id}`} className='noteCard'>
            <header className='noteCard__header'>
                <h2 className='noteCard__title'>{note.title}</h2>
            </header>

            <div className='noteCard__body'>
                {typeof parsedBody === "array" ? parsedBody.map((el) => <p key={el}>{el}</p>) : parsedBody}
            </div>
        </Link>
    );
}

export default NoteCard;
