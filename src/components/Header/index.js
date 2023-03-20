import React from "react";
import Nav from "../Nav";

function Header(props) {
    console.log(props)
    const { currentTab, setCurrentTab } = props;

    return (
        <div>
            <section>
                <header>
                    <div>
                        <h1>Tochio Herrera's Portfolio</h1>
                    </div>
                    <div>
                        <Nav
                            currentTab={currentTab}
                            setCurrentTab={setCurrentTab}>
                        </Nav>
                    </div>
                </header>
            </section>
            <section className="hero">
                <div className="hero-text">
                    <h2>Welcome</h2>
                    <p>My name is Tochio Herrera and this my portfolio page built with React.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Header;