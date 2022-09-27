import NavigationLink from "../Buttons/NavigationLink";

function Header() {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='header__nav--items'>
                    <li>
                        <NavigationLink to={"/"} title={"Homepage"}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                <path d='M12.74 2.32a1 1 0 0 0-1.48 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1 1 1 0 0 0-.26-.68z'></path>
                            </svg>
                        </NavigationLink>
                    </li>

                    <li>
                        <NavigationLink to={"/new"} title={"Add note"} optionalClass={`inverse`}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                <path d='M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z'></path>
                            </svg>
                        </NavigationLink>
                    </li>

                    <li>
                        <NavigationLink to={"/archives"} title={"Archives"}>
                            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                                <path d='m21.704 5.29-2.997-2.997A.996.996 0 0 0 18 2H6a.996.996 0 0 0-.707.293L2.296 5.29A.994.994 0 0 0 2 5.999V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5.999a.994.994 0 0 0-.296-.709zM6.414 4h11.172l1 1H5.414l1-1zM17 13v1H7v-4h2v2h6v-2h2v3z'></path>
                            </svg>
                        </NavigationLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
