import Link from "next/link"
import styles from "./Section-2.module.css"
import CreateCarousel from "../CarouselPhotos/CarouselPhotos"
const Section2 = () => {
    const photos: string[] =[
        "https://res.cloudinary.com/dbmfju6mu/image/upload/v1732221553/d_rn6vip.jpg",
        "https://res.cloudinary.com/dbmfju6mu/image/upload/v1732221442/b_vqrjvf.png"
    ]
    return(
        <div className={styles.container}>
        <div className={styles.paddingContainer}>
            <div className={styles.gridSection}>
                <div className={styles.gridContainer}>
                    <h3 className={styles.title}>Alquila el mejor sonido de la zona</h3>
                    <p className={styles.description}>INCLUYE: <br />Dos parlantes de 15 pulgadas, consola para ecualizar el sonido, cable conector a celular o computadora,se puede pedir la opcion con bluetooth.<br />A demas de poder sumar 1 o 2 microfonos</p>
                    <Link href="/form"><button className={styles.button}>Alquilar</button></Link>
                </div>
                <div className={styles.carousel}>
                <CreateCarousel photos={photos} />
                {/* <Image src="/seccion3.jpg" alt="hero" height={500} width={500} className={styles.image}/> */}
                </div>
            </div>
        </div>
    </div >
    )
}
export default Section2