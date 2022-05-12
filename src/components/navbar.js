import React from 'react';

import styles from './styles.module.css'


export default function NavBar({title}){
  return (
    <div className={styles.navbar}>
      <h1>{title}</h1>
    </div>
  )
}