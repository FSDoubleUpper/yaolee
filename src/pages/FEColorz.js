import React from "react";

const FEColorz = (props) => {
    return (
        <main className="main">
            <header>
                <h1>FEColorz</h1>
            </header>
            <section className="fecolorz-info">
                <img
                    className="fecolorz-screenshot"
                    src="images\fecolorz.png"
                    alt="screenshot for F E Colors"
                />
                <div>
                    <a
                        href="https://fecolorz.netlify.app"
                        target="_blank"
                        className="play-button"
                    >
                        CLICK HERE to USE
                    </a>
                </div>
                <section>
                    <p>
                        FEColorz is a web app that helps front-end developers
                        who have road blocks on font color and background color
                        combination.
                        <br />
                        FEColorz assist by generating random colors for font and
                        background as well as allowing an editable custom text
                        for better visualization.
                        <br />
                    </p>
                    <br />
                    <br />
                    <p>Features:</p>
                    <ul className="fecolorz-list">
                        <li>custom text edit</li>
                        <li>randomize color font text</li>
                        <li>randomize color for background</li>
                        <li>provide RGB code</li>
                        <li>provide Hex code</li>
                        <li>easily click on code to copy to clipboard</li>
                    </ul>
                </section>
            </section>
        </main>
    );
};

export default FEColorz;
