import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";

import { getNote, archiveNote, unarchiveNote, deleteNote } from "../utils/local-data";

import { ButtonIconOnly, DeleteConfirmDialog, NavigationLink, SvgEl } from "../components";

function NoteDetail() {
    const [parsedBody, setParsedBody] = useState([]);
    const [noteData, setNoteData] = useState({});
    const [archived, setArchived] = useState(false);
    const [dialogState, setDialogState] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    function navigateToLastVisit() {
        navigate(-1);
    }

    useEffect(() => {
        const data = getNote(id);
        setNoteData(data);
        setArchived(data.archived);
        setParsedBody(parse(data.body));
    }, [id]);

    function toggleToArchive(id) {
        setArchived((prev) => !prev);
        if (archived) unarchiveNote(id);
        else archiveNote(id);
    }

    function toLocalTime(date) {
        return new Date(date).toLocaleDateString("id");
    }

    function openDialog() {
        setDialogState(true);
    }

    function closeDialog() {
        setDialogState(false);
    }

    function deleteNoteFromList(id) {
        deleteNote(id);
        navigate(-1);
    }

    return (
        <main className='mainElement noteDetail'>
            <header className='noteDetail__controll'>
                <div>
                    <ButtonIconOnly onClick={navigateToLastVisit}>
                        <SvgEl>
                            <path d='M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z'></path>
                        </SvgEl>
                    </ButtonIconOnly>
                </div>

                <div className='noteDetail__controll--main'>
                    <ButtonIconOnly onClick={() => toggleToArchive(noteData.id)}>
                        {archived ? (
                            <SvgEl>
                                <path d='M12 11.222 14.667 13l-.89-3.111L16 8l-2.667-.333L12 5l-1.333 2.667L8 8l2.223 1.889L9.333 13z'></path>
                                <path d='M19 21.723V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v17.723l7-4.571 7 4.571zM8 8l2.667-.333L12 5l1.333 2.667L16 8l-2.223 1.889.89 3.111L12 11.222 9.333 13l.89-3.111L8 8z'></path>
                            </SvgEl>
                        ) : (
                            <SvgEl>
                                <path d='M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z'></path>
                            </SvgEl>
                        )}
                    </ButtonIconOnly>
                    <NavigationLink to={`/edit/${noteData.id}`} title={"Edit note"}>
                        <SvgEl style={{ opacity: 1 }}>
                            <path d='M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21 1 1 0 0 0 4 21zM18 4.41 19.59 6 18 7.59 16.42 6zM5.91 16.51 15 7.41 16.59 9l-9.1 9.1-2.11.52z'></path>
                        </SvgEl>
                    </NavigationLink>

                    <section>
                        <DeleteConfirmDialog
                            state={dialogState}
                            closeDialog={closeDialog}
                            deleteNote={deleteNoteFromList}
                            noteId={noteData.id}
                        />

                        <ButtonIconOnly onClick={openDialog}>
                            <SvgEl>
                                <path d='M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z'></path>
                                <path d='M9 10h2v8H9zm4 0h2v8h-2z'></path>
                            </SvgEl>
                        </ButtonIconOnly>
                    </section>
                </div>
            </header>

            <section className='noteDetail__detail'>
                <h1 className='noteDetail__title'>{noteData.title}</h1>
                <div className='noteDetail__time'>
                    Created at: <time>{toLocalTime(noteData.createdAt)}</time>
                </div>
                <div className='noteDetail__body'>
                    {typeof parsedBody === "array" ? parsedBody.map((el) => <p key={el}>{el}</p>) : parsedBody}
                </div>
            </section>
        </main>
    );
}

export default NoteDetail;
