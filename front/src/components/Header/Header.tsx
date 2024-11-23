import Link from "next/link"
import Image from "next/image"
import styles from "./Header.module.css"
import MenuHeader from "../MenuHeader/MenuHeader"
import logo from "../../assets/logo.png"
const Header = () => {
    return(
        <div className={styles.navBg}>
            <div className={styles.container}>
                <div>
                <Link href="/"><Image src={logo} alt="logo" className={styles.logo}/></Link>
                </div>
                <MenuHeader/>
            </div>
        </div>
    )
} 

export default Header