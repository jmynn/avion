import Image from 'next/image'
import { ReactNode } from 'react'
import styles from './IconCart.module.css'

const IconCart = ():ReactNode => {
  return(
    <div className={styles.cart}>
      <Image src={'assets/icons/shopping cart.svg'} alt='cart icon' width={16} height={16} />
    </div>
  )
}

export default IconCart