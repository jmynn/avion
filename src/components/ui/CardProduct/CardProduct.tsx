import Image from 'next/image'
import { ReactNode } from 'react'
import styles from './CardProduct.module.css'

type Props = {
  title: string
  cost: number
  picture?: string | null
  handleClick: (...args: unknown[]) => void
}

const CardProduct = ({ cost, title, picture, handleClick }: Props): ReactNode => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={picture ?? '/none.png'} alt="product pic"  sizes='100vw' width={0} height={0} style={{width: '100%', height: 'auto'}}/>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.cost}>£{cost}</div>
        <button className={styles.addToCart} onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  )
}

export default CardProduct