import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { CiYoutube } from 'react-icons/ci';

function Footer() {
    return (
        <footer>
            <h2>Made by Tochio Herrera</h2>
            <p>
                <ul>
                    <a href="https://github.com/Tochio12">
                        <li className="logo">
                            <VscGithub />
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/tochio-herrera-7170a6198/">
                        <li className="logo">
                            <AiOutlineLinkedin />
                        </li>
                    </a>
                    <a href="https://www.youtube.com/">
                        <li className="logo">
                            <CiYoutube />
                        </li>
                    </a>
                </ul>
            </p>
        </footer>
    )
}

export default Footer;