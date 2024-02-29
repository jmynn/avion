import NextLink from 'next/link'
import { ReactNode } from 'react'
import styles from './Navbar.module.css'

const Navbar = ():ReactNode => {
  return(
    <nav className={styles.navbar}>
      <NextLink href={'/'}>Plant pots</NextLink>
      <NextLink href={'/'}>Ceramics</NextLink>
      <NextLink href={'/'}>Tables</NextLink>
      <NextLink href={'/'}>Chairs</NextLink>
      <NextLink href={'/'}>Crockery</NextLink>
      <NextLink href={'/'}>Tableware</NextLink>
      <NextLink href={'/'}>Cutlery</NextLink>
    </nav>
  )
}

export default Navbar