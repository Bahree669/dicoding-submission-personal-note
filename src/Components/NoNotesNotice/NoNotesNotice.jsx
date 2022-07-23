import React from "react";
import "./NoNotesNotice.css";

import noItemImage from "../../Assets/no-item.jpg";

function NoNotesNotice({ noticeMessage }) {
    return (
        <div className='notice'>
            <div className='notice-img'>
                <img src={noItemImage} alt='no item' />
            </div>

            <h3 className='notice-title'>{noticeMessage}</h3>
        </div>
    );
}

export default NoNotesNotice;
