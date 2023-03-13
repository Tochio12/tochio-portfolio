import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
    const {
        currentPage,
        setCurrentPage,

    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage.name);
    }, [currentPage]);

    return (
        <nav>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="#about"
                        on Click={() => setCurrentPage('About')}
                        className={currentPage.name === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#portfolio"
                        on Click={() => setCurrentPage('Portfolio')}
                        className={currentPage.name === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        on Click={() => setCurrentPage('Contact')}
                        className={currentPage.name === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"
                        on Click={() => setCurrentPage('Resume')}
                        className={currentPage.name === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;