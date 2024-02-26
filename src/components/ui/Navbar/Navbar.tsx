import NextLink from 'next/link'
import { ReactNode } from 'react'
import styles from './Navbar.module.css'

const Navbar = ():ReactNode => {
  return(
    <nav className={styles.navbar}>
      <NextLink href={'/plant-pots'}>Plant pots</NextLink>
      <NextLink href={'/ceramics'}>Ceramics</NextLink>
      <NextLink href={'/tables'}>Tables</NextLink>
      <NextLink href={'/chairs'}>Chairs</NextLink>
      <NextLink href={'/crockery'}>Crockery</NextLink>
      <NextLink href={'/tableware'}>Tableware</NextLink>
      <NextLink href={'/cutlery'}>Cutlery</NextLink>
    </nav>
  )
}

export default Navbar