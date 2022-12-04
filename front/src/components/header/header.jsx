import React from 'react';
import WaveImage from './wave.svg'
import styles from './styles.module.css';
import { Text } from '../../components/containers-language/language';


export const Header = () => {
  return (
    <div className={styles.test}>
            <h1 className={styles.title}><Text tid="welcomeTitle" /></h1>
            <p className={styles.desc}><Text tid="welcomeDescription" /></p>
        <img src={ WaveImage } alt="" className={ styles.wave }/>
    </div>
  )
}
