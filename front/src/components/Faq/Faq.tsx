"use client"
import { useState } from "react"
import styles from "./Faq.module.css"

const faqs = [
    {
      question: "¿Cómo puedo reservar el equipo?",
      answer: `Para reservar el equipo, necesitas ir al formulario "alquilar" y completar los datos correctamente.` ,
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos transferencia bancaria y efectivo hasta el momento.",
    },
    {
      question: "¿Tengo que señar?",
      answer: "Sí, las reservas sirven para guardar el dia y el horario en la base de datos.",
    },
    {
      question: "¿Que trae el equipo completo?",
      answer: "El equipo completo son 2 parlantes de 15 pulgadas, una consola que funciona como potencia, el cable jack para conectar al celular o la computadora y se puede sumar 1 o 2 microfonos. Si necesitas algo extra, tenes que preguntar al whatsapp.",
    },
    {
      question: "¿Hay algun numero de telefono?",
      answer: "Si. Luego de completar el formulario de alquilar, el mismo te enviara al whatsapp.",
    },
  ];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)
    
    const toggleFaq = (index:number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        // <div className={styles.container}>
            <div className={styles.section}>
                <h2 className={styles.title}>Preguntas Frecuentes</h2>
                <div className={styles.faqList}>
                    {faqs.map((faq,index) => (
                        <div className={styles.buttonList} key={index}>
                            <button onClick={() => toggleFaq(index)}>{faq.question}</button>
                            {openIndex === index && <p className={styles.answer}>{faq.answer}</p> }
                        </div>
                    ))}
                </div>
            </div>
        // </div>
    )
}

export default Faq;