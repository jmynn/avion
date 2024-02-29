import Image from 'next/image'
import { ReactNode } from 'react'
import styles from './Idea.module.css'

const Idea = ():ReactNode => {
  return(
    <div className={styles.idea}>
        <div className={styles.row}>
            <div className={styles.column}>
                <div className={styles.body}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>It started with a small idea</h2>
                        <div className={styles.subtitle}>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</div>
                    </div>
                    <div className={styles.view}>
                        <button>View collection</button>
                    </div>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.image}>
                    <Image src={'/assets/idea/idea.webp'} alt='small idea' width={0} height={0} sizes='100vw' style={{width: 'inherit', height: 'inherit'}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Idea