import './style.css';
import kirisu from "./kirisu.jpg";

const MakiseKirisuPage = () => {
    return (
        <div>
            <header id="title">
            Makise Kirisu
            </header>

            <div id="img-div">
            <img id="image" src={kirisu} alt="Makise Kirisu sitting down." />
            <figcaption id="img-caption">Picture of Makise Kirisu.</figcaption>
            </div>

            <p id="tribute-info">
            <a id="tribute-link" href="https://steins-gate.fandom.com/wiki/Kurisu_Makise" target="_blank" rel="noreferrer">
                Makise Kirisu</a> is the best character in Steins Gate.
            </p>

        </div>
    )
}

export default MakiseKirisuPage;