import styles from "./About.module.css"
const About = () => {
    return (
        <div className={styles.container}>
            <h3>Sobre Mi</h3>
            <div className={styles.about}>
                <h4>Gaston Gonzalez</h4>
                <p>Hola buenas, tengo 20 años y soy un programador web full stack con experiencia en ventas. Actualmente estoy buscando trabajo como desarollador web.</p>
                <p>Me considero una persona proactiva, organizada y segura de si misma que siempre busca aprender y mejorar cada dia. <br /></p> 
                <p>Tengo conocimiento solido de 1 año en NextJS, NestJS, TypeScript, React, NodeJS, JavaScript, PostgreSQL entre otras.</p>
                <p>Completa el siguiente formulario si queres contactarte conmigo:</p>
                <div>
                    <form className={styles.form} action="">
                        <div>
                            <label htmlFor="">email</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">Por que y Para que me contactas?</label>
                            <textarea name="" id=""></textarea>
                        </div>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default About;