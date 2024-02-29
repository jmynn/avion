import Image from 'next/image'
import NextLink from 'next/link'
import { ReactNode } from 'react'
import styles from './IconCart.module.css'

const IconCart = ():ReactNode => {
  return(
    <NextLink href={'/cart'} className={styles.cart}>
      <Image src={'assets/icons/shopping cart.svg'} alt='cart icon' width={16} height={16} />
    </NextLink>
  )
}

export default IconCart