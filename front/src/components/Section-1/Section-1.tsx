import styles from './Section-1.module.css'
const Section1 = () =>{
    return(
        <div className={styles.heroBg}>
        <div className={styles.containerGrid}>
            <div className={styles.textOrder}>
              <h3 style={{ textShadow: '8px 8px 12px rgba(0, 0, 0, 0.7)' }} className={styles.text} >VIBRA OESTE</h3>
            </div>
        </div>
      </div >
    )
}

export default Section1;