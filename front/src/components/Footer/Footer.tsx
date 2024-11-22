import Link from "next/link"
import Image from "next/image"
import styles from "./Footer.module.css"
import logo from "../../assets/logo.png"
const Footer = () => {
    return(
        <footer className={styles.footer}>
    <div className={`container ${styles.footerSpace}`}>
    <Link href="/"><Image src={logo} alt="logo" width={100} height={60} className={styles.logo}/></Link>
      <p className={styles.text}>Creado por <Link href="/about">Gaston Gonzalez </Link>🍃</p>
      <div className={styles.socialMedia}>
        <Link href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png" alt="LinkedIn Logo" /></Link>
        <Link href="/"><img src="https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png?v=638664844220000000" alt="GitHub Logo" /></Link>
      </div>
      <p className={styles.copyright}>&copy; no copyright</p>
    </div>
  </footer>
    )
}
export default Footer
