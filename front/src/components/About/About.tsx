"use client"
import { contactForm } from "@/services/contact.service";
import styles from "./About.module.css"
import { ChangeEvent, useState } from "react";
interface IData {
    email:string;
    message:string;
}
const About = () => {
    const initialData:IData = {email:"",message:""}
    const initialDirty = {email:false,message:false}
    const [data,setData] = useState<IData>(initialData)
    const [dirty, setDirty] = useState(initialDirty);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {            
    setData({
      ...data, [e.target.name]: e.target.value
    });
    setDirty({...dirty,[e.target.name]: true});
    };


    const handleOnSubmit = async(e:React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await contactForm(data)
            if(res.success) alert("Contacto subido correctamente, pronto te enviare un mail")
            else{        
                alert(`Te faltan estos datos: ${res.error.map((e:any) => e.property)} `)
            }
        } catch (e:unknown) {
            console.log(e);
            return alert("Error en base de datos, intenta nuevamente en un momento")
        }
    }

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
                    <form className={styles.form} onSubmit={handleOnSubmit}>
                        <div>
                            <label htmlFor="">email</label>
                            <input type="text" name="email" id="email" onChange={handleChange} value={data.email} />
                        </div>
                        <div>
                            <label htmlFor="">Por que y Para que me contactas?</label>
                            <textarea name="message" id="message" onChange={handleChange} value={data.message}></textarea>
                        </div>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default About;