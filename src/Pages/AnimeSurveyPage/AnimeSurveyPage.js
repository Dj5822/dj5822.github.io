const AnimeSurveyPage = () => {
    return (
        <div>
            <div>
                <h1 id="title">
                    Anime Survey
                </h1>

                <p id="description">
                    An anime survey that collects data on user preferences in anime.
                </p>
                <form id="survey-form">
                    <label id="name-label" for="name">Name: </label> <input id="name" type="text" placeholder="Enter your name" required />

                    <label id="email-label" for="email">Email: </label> <input id="email" type="email" placeholder="Enter your email" required />

                    <label id="number-label" for="number">What rating would you give for Sword Art Online season 1? 
                    (1=horrible 10=perfect):</label>
                    <input id="number" type="number" min={0} max={10} placeholder="Enter rating out of 10" required />

                    <div>
                        Which of the following is your favourite male character?
                        <select id="dropdown">
                        <option>Lamperouge, Lelouch</option>
                        <option>Lawliet, L</option>
                        <option>Monkey D., Luffy</option>
                        <option>Elric, Edward</option>
                        <option>Levi</option>
                        <option>Yagami, Light</option>
                        <option>Okabe, Rintarou</option>
                        <option>Ayanokouji Kiyotaka</option>
                        </select>
                    </div>

                    <div>
                        Which of the following is your favourite female character?
                        <label><input type="radio" name="female-character" value="Makise, Kurisu"/> Makise, Kurisu</label>
                        <label><input type="radio" name="female-character" value="Rem"/> Rem</label>
                        <label><input type="radio" name="female-character" value="Ackerman, Mikasa"/> Ackerman, Mikasa</label>
                        <label><input type="radio" name="female-character" value="Gasai, Yuno"/> Gasai, Yuno</label>
                        <label><input type="radio" name="female-character" value="Senjougahara, Hitagi"/> Senjougahara, Hitagi</label>
                        <label><input type="radio" name="female-character" value="Aisaka, Taiga"/> Aisaka, Taiga</label>
                        <label><input type="radio" name="female-character" value="Saber"/> Saber</label>
                        <label><input type="radio" name="female-character" value="Megumin"/> Megumin</label>
                        <label><input type="radio" name="female-character" value="Holo"/> Holo</label>
                    </div>

                    <div>
                        Select all the anime that you enjoyed watching:
                        <label><input type="checkbox" name="show" value="Death Note"/>Death Note</label>
                        <label><input type="checkbox" name="show" value="Attack on Titan"/>Attack on Titan</label>
                        <label><input type="checkbox" name="show" value="Sword Art Online"/>Sword Art Online</label>
                        <label><input type="checkbox" name="show" value="Fullmetal Alchemist: Brotherhood"/>Fullmetal Alchemist: Brotherhood</label>
                        <label><input type="checkbox" name="show" value="One Punch Man"/>One Punch Man</label>
                        <label><input type="checkbox" name="show" value="Tokyo Ghoul"/>Tokyo Ghoul</label>
                        <label><input type="checkbox" name="show" value="Steins;Gate"/>Steins;Gate</label>
                        <label><input type="checkbox" name="show" value="No Game No Life"/>No Game No Life</label>
                        <label><input type="checkbox" name="show" value="Angel Beats!"/>Angel Beats!</label>
                        <label><input type="checkbox" name="show" value="Boku no Hero Academia"/>Boku no Hero Academia</label>
                    </div>

                    <div>
                        Express your thoughts about anime:
                        <textarea rows="5"></textarea>
                    </div>
                    
                    <button id="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AnimeSurveyPage