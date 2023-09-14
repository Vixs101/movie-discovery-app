import React from "react";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HeroText() {
    return (
        <section className="heroText">
            <h1>John Wick 3 : Parabellum</h1>
            <div className="ratings">
                <img src="/fruitImg2.png" alt="IMDB" className="IMDB" />
                <p className="rating">86.0 / 100</p>
                <img src="/fruit.png" alt="rottenTomato" className="rottenTomato" />
                <p className="rating">97%</p>
            </div>
            <p className="paragraph">
                John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
            </p>
            <button className="watch">
                <FontAwesomeIcon icon={faPlayCircle} /> WATCH TRAILER
            </button>
        </section>
    );
}

export default HeroText;