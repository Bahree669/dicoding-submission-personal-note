import React from "react";
import "./Note.css";

function Note() {
    return (
        <article className='note'>
            <header className='note-detail'>
                <h2 className='note-title'>Lorem, ipsum dolor.</h2>
                <p className='note-date'>01-10-2022</p>
            </header>

            <section className='note-body'>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ducimus adipisci debitis? Modi
                    sunt aliquid officiis minima repellendus, pariatur, molestiae ratione, eaque accusamus magni
                    distinctio eius dicta fugiat quos veniam veritatis voluptatibus recusandae nemo atque quod adipisci
                    debitis. Non, rerum quibusdam. Repellat, natus earum dignissimos ducimus ipsam molestias magnam
                    architecto.
                </p>
            </section>

            <section className='note-controll'>
                <button className='btn btn-main'>Add to Archives</button>
                <button className='btn btn-secondary'>Delete</button>
            </section>
        </article>
    );
}

export default Note;
