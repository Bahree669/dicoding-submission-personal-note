import React from "react";
import OnlyNameLink from "../components/Buttons/OnlyNameLink";

function UrlErrorPage() {
    return (
        <main className='mainElement urlError'>
            <div className='urlError__content'>
                <h1 className='urlError__title'>404</h1>

                <p className='urlError__body'>
                    Oops.. We cannot find the page you are looking for. It's either removed or you entered a broken
                    link.
                </p>
                <OnlyNameLink href={"/"} linkName={"Go back"} />
            </div>
        </main>
    );
}

export default UrlErrorPage;
