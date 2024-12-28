import styles from "./About.module.css"
const About = () => {
    return (
        <div className={styles.container}>
            <h3>Sobre Mi</h3>
            <div className={styles.about}>
                <h4>Gaston Gonzalez</h4>
                <p>Hola buenas, tengo 20 anios y soy un programador web full stack</p>
            </div>
        </div>
    )
};

export default About;