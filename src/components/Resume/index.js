import React from "react";

function Resume() {
    return (
        <div>
            <section id="welcome-section">
                <div className="flex-row">
                    <p>
                        Checkout out my list of Developer skills and proficiencies!
                    </p>
                </div>
            </section>

            <section id="home-page-body" className="resume-body">
                <div className="article column1">
                    <p className="column-title">Front-End TEch</p>
                        <ul className="column-text">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>APIs</li>
                            <li>Bootstrap</li>
                            <li>GIT</li>
                        </ul>
                </div>

                <div className="article column2">
                    <p className="column-title">Back-End Tech</p>
                    <ul className="column-text">
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MySQL</li>
                            <li>Sequlize</li>
                            <li>Object-Relational Mapping</li>
                            <li>Model-View-Controller</li>
                        </ul>
                </div>

                <div className="article column3">
                    <p className="column-title">Performance Tech</p>
                    <ul className="column-text">
                            <li>Progressive Web Applications</li>
                            <li>NoSql</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>React</li>
                            <li>GraphQL</li>
                            <li>Mern</li>
                            <li>State</li>
                        </ul>
                </div>
            </section>
        </div>
    )
}

export default Resume;