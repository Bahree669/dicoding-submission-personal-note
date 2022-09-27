import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import parse from "html-react-parser";

import { addNote, editNote, getNote } from "../utils/local-data";

import { ButtonIconOnly } from "../components";
import { useEffect } from "react";

function NewNotePage() {
    const { id } = useParams();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [placeholder, setPlaceholder] = useState("Note");
    const [noteData, setNoteData] = useState({
        id: +new Date(),
        title: "",
        body: "",
        archived: false,
        createdAt: new Date().toISOString(),
    });

    function handleFocus() {
        setPlaceholder(parse(noteData.body));
    }

    function handleBlur() {
        if (noteData.body.length) setPlaceholder(parse(noteData.body));
        else setPlaceholder("Note");
    }

    function handleChange(e) {
        const target = e.target;
        const name = target.name || target.dataset.name;
        const value = target.value || target.innerHTML;
        setNoteData({ ...noteData, [name]: value });
    }

    function submitNote() {
        if (/\/edit\/[0-9]+/.test(pathname)) editNote(noteData);
        else addNote(noteData);
        navigate(-1);
    }

    useEffect(() => {
        if (/\/edit\/[0-9]+/.test(pathname)) {
            const data = getNote(id);
            setNoteData(data);
            setPlaceholder(parse(data.body));
        }
    }, [id, pathname]);

    return (
        <main className='mainElement inputForm'>
            <input
                type='text'
                placeholder='Title'
                name='title'
                className='inputForm__title'
                autoComplete='off'
                autoFocus
                value={noteData.title}
                onChange={(e) => handleChange(e)}
            />

            <div
                className='inputForm__body'
                data-name='body'
                onInput={(e) => handleChange(e)}
                contentEditable
                suppressContentEditableWarning
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                {typeof placeholder === "array" ? placeholder.map((el) => el) : placeholder}
            </div>

            <div className='inputForm__button' onClick={submitNote}>
                <ButtonIconOnly optionalClass={`invers`}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                        <path d='m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z'></path>
                    </svg>
                </ButtonIconOnly>
            </div>
        </main>
    );
}

export default NewNotePage;
