import React from "react";

import NoitemImage from "../../assets/no-item.jpg";
import OnlyNameLink from "../Buttons/OnlyNameLink";

function NoNotes() {
    return (
        <section className='noNotes'>
            <h1 className='noNotes__title'>No notes found :'(</h1>

            <div className='noNotes__content'>
                <p className='noNotes__body'>
                    There are no notes in this category. <br />
                </p>

                <OnlyNameLink href={"/new"} linkName={"Try to add one."} title={"Add notes"} />
            </div>

            <img src={NoitemImage} alt='' />
        </section>
    );
}

export default NoNotes;
