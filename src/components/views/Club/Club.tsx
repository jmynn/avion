import FormFeedback from '@/components/ui/FormFeedback/FormFeedback'
import { ReactNode } from 'react'
import styles from './Club.module.css'

const Club = ():ReactNode => {
  return(
    <div className={styles.club}>
      <div className={styles.row}>
        <h2 className={styles.title}>Join the club and get the benefits</h2>
        <div className={styles.subtitle}>Sign up for our newsletter and receive exclusive offers {'\n'} on new ranges, sales, pop up stores and more</div>
        <ul className={styles.benefits}>
          <li className={styles.benefit}>Exclusive offers</li>
          <li className={styles.benefit}>Free events</li>
          <li className={styles.benefit}>Large discounts</li>
        </ul>
        <FormFeedback />
      </div>
    </div>
  )
}

export default Club