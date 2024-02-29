import Image from 'next/image'
import { ReactNode } from 'react'
import styles from './Brand.module.css'

const Brand = ():ReactNode => {
  return(
    <div className={styles.brand}>
        <div className={styles.row}>
            <div className={styles.column}>
                <h2 className={styles.title}>What makes our brand {'\n'}
different</h2>
            </div>
            <div className={styles.column}>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <Image src={'assets/icons/delivery.svg'} alt='delivery icon' width={24} height={24}/>
                        <h4 className={styles.title}>Next day as standard</h4>
                        <div className={styles.text}>Order before 3pm and get your order the next day as standard</div>
                    </div>
                    <div className={styles.card}>
                        <Image src={'assets/icons/checkmark.svg'} alt='checkmark icon' width={24} height={24}/>
                        <h4 className={styles.title}>Made by true artisans</h4>
                        <div className={styles.text}>Handmade crafted goods made with real passion and craftmanship</div>
                    </div>
                    <div className={styles.card}>
                        <Image src={'assets/icons/purchase.svg'} alt='purchase icon' width={24} height={24}/>
                        <h4 className={styles.title}>Unbeatable prices</h4>
                        <div className={styles.text}>For our materials and quality you won’t find better prices anywhere</div>
                    </div>
                    <div className={styles.card}>
                        <Image src={'assets/icons/sprout.svg'} alt='sprout icon' width={24} height={24}/>
                        <h4 className={styles.title}>Recycled packaging</h4>
                        <div className={styles.text}>We use 100% recycled to ensure our footprint is more manageable</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brand