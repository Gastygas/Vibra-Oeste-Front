import Link from "next/link"
import Image from "next/image"
import styles from "./Footer.module.css"
import logo from "../../assets/logo.png"
const Footer = () => {
  const linkedIn = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png"
  const gitHub = "https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png?v=638664844220000000"
  return(
        <footer className={styles.footer}>
    <div className={`container ${styles.footerSpace}`}>
    <Link href="/"><Image src={logo} alt="logo" width={100} height={60} className={styles.logo}/></Link>
      <p className={styles.text}>Creado por <Link href="/about">Gaston Gonzalez </Link>🍃</p>
      <div className={styles.socialMedia}>
        <Link href="/"><Image src={linkedIn} alt="LinkedIn Logo" width={100} height={60} /></Link>
        <Link href="/"><Image src={gitHub} alt="GitHub Logo" width={1} height={1}/></Link>
      </div>
      <p className={styles.copyright}>&copy; no copyright</p>
    </div>
  </footer>
    )
}
export default Footer
