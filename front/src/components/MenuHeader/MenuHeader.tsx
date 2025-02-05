import Link from 'next/link'
import styles from './MenuHeader.module.css'

const MenuHeader = () => {
    return(
        <div className={styles.container}>
            <ul className={styles.menu}>
                <li>
                <Link href="/form" className={styles.itemsnav}>Alquilar</Link>
                </li>
                <li>
                <Link href="/faq" className={styles.itemsnav}>Preguntas</Link>
                </li>
                <li>
                <Link href="/about" className={styles.itemsnav}>Sobre Mi</Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuHeader