import Image from 'next/image'
import { ReactNode } from 'react'
import styles from './IconSearch.module.css'

const IconSearch = ():ReactNode => {
  return(
    <div className={styles.search}>
      <Image src={'assets/icons/search.svg'} alt='search icon' width={16} height={16} />
    </div>
  )
}

export default IconSearch