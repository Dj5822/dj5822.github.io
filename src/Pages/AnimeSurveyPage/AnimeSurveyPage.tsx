import styles from './style.module.scss';

const AnimeSurveyPage = () => {
    return (
        <div className={styles.mainDiv}>
            <div className={styles.subDiv}>
                <h1 className={styles.title}>
                    Anime Survey
                </h1>

                <p className={styles.description}>
                    An anime survey that collects data on user preferences in anime.
                </p>

                <form className={styles.surveyForm}>
                    <div className={styles.rowDiv}>
                        <label id="name-label" htmlFor="name">Name: </label> 
                        <input id="name" className={styles.input} type="text" placeholder="Enter your name" required />
                    </div>

                    <div className={styles.rowDiv}>
                        <label id="email-label" htmlFor="email">Email: </label> 
                        <input id="email" className={styles.input}  type="email" placeholder="Enter your email" required />
                    </div>

                    <div className={styles.rowDiv}>
                        <label id="number-label" htmlFor="number">What rating would you give for Sword Art Online season 1?</label>
                        <label>(1=horrible 10=perfect):</label>
                        <input id="number" className={styles.input} type="number" min={0} max={10} placeholder="Enter rating out of 10" required />
                    </div>

                    <div className={styles.rowDiv}>
                        Which of the following is your favourite male character?
                        <select id="dropdown" className={styles.select}>
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

                    <div className={styles.rowDiv}>
                        Which of the following is your favourite female character?
                        <label><input className={styles.input} type="radio" name="female-character" value="Makise, Kurisu"/> Makise, Kurisu</label>
                        <label><input className={styles.input} type="radio" name="female-character" value="Rem"/> Rem</label>
                        <label><input className={styles.input} type="radio" name="female-character" value="Ackerman, Mikasa"/> Ackerman, Mikasa</label>
                        <label><input className={styles.input} type="radio" name="female-character" value="Gasai, Yuno"/> Gasai, Yuno</label>
                        <label><input className={styles.input} type="radio" name="female-character" value="Senjougahara, Hitagi"/> Senjougahara, Hitagi</label>
                        <label><input className={styles.input} type="radio" name="female-character" value="Aisaka, Taiga"/> Aisaka, Taiga</label>
                        <label><input className={styles.input} type="radio" name="female-character" value="Saber"/> Saber</label>
                        <label><input className={styles.input} type="radio" name="female-character" value="Megumin"/> Megumin</label>
                        <label><input className={styles.input} type="radio" name="female-character" value="Holo"/> Holo</label>
                    </div>

                    <div className={styles.rowDiv}>
                        Select all the anime that you enjoyed watching:
                        <label><input className={styles.input} type="checkbox" name="show" value="Death Note"/>Death Note</label>
                        <label><input className={styles.input} type="checkbox" name="show" value="Attack on Titan"/>Attack on Titan</label>
                        <label><input className={styles.input} type="checkbox" name="show" value="Sword Art Online"/>Sword Art Online</label>
                        <label><input className={styles.input} type="checkbox" name="show" value="Fullmetal Alchemist: Brotherhood"/>Fullmetal Alchemist: Brotherhood</label>
                        <label><input className={styles.input} type="checkbox" name="show" value="One Punch Man"/>One Punch Man</label>
                        <label><input className={styles.input} type="checkbox" name="show" value="Tokyo Ghoul"/>Tokyo Ghoul</label>
                        <label><input className={styles.input} type="checkbox" name="show" value="Steins;Gate"/>Steins;Gate</label>
                        <label><input className={styles.input} type="checkbox" name="show" value="No Game No Life"/>No Game No Life</label>
                        <label><input className={styles.input} type="checkbox" name="show" value="Angel Beats!"/>Angel Beats!</label>
                        <label><input className={styles.input} type="checkbox" name="show" value="Boku no Hero Academia"/>Boku no Hero Academia</label>
                    </div>

                    <div className={styles.rowDiv}>
                        Express your thoughts about anime:
                        <textarea rows={5} className={styles.textarea}></textarea>
                    </div>
                    
                    <button id="submit" className={styles.button}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AnimeSurveyPage