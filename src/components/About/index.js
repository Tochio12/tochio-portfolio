import React from "react";

function About() {
    return (
        <section id="about-me" className="my-5 intro">
            <div className="flex-row">
                <h1 id="about" className="section-title primary-border">
                    About Me
                </h1>
            </div>
            <div className="flex-row">
                {/* <div className="intro-info">
                    <div className="intro-img">
                        <img src="https://via.placeholder.com/150" alt="profile" /> */}
                    </div>
                    <p>
                        Hello! My name is Tochio Herrera. Im currently 21 living in New Jersey.
                        I am a full stack web developer with a background in customer service.
                        I was born in Peru and moved to the United States when I was 5 years old.
                        When I'm not working on my coding skills, I enjoy exercise like going for hikes and playing soccer.
                        I also love playing video games and binge watching a good show.

                    </p>
                {/* </div>
            </div> */}
        </section>
    );
}

export default About;