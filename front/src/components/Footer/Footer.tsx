import Link from "next/link"
import Image from "next/image"
import styles from "./Footer.module.css"
import logo from "../../assets/logo.png"
const Footer = () => {
  const linkedIn = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png"
  const gitHub = "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
  return(
        <footer className={styles.footer}>
    <div className={`container ${styles.footerSpace}`}>
    <Link href="/"><Image src={logo} alt="logo" width={100} height={60} className={styles.logo}/></Link>
      <p className={styles.text}>Creado por <Link href="/about">Gaston Gonzalez </Link>🍃</p>
      <div className={styles.socialMedia}>
        <Link target="blank" href="https://www.linkedin.com/in/gaston-rodrigo-gonzalez-403b03262/"><Image src={linkedIn} alt="LinkedIn Logo" width={100} height={60} /></Link>
        <Link target="blank" href="https://github.com/Gastygas"><Image src={gitHub} alt="GitHub Logo" width={100} height={60}/></Link>
      </div>
      <p className={styles.copyright}>&copy; no copyright</p>
    </div>
  </footer>
    )
}
export default Footer
