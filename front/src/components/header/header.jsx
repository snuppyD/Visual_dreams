import React from 'react';
import WaveImage from './wave.svg'
import styles from './styles.module.css';

export const Header = () => {
  return (
    <div className={styles.test}>
            <h1 className={styles.title}>{ `Створи власну мрію` }</h1>
            <p className={styles.desc}>{`З нашим додатком ви нічого не забудете\n і будете йти до своєї цілі`}</p>
        <img src={ WaveImage } alt="" className={ styles.wave }/>
    </div>
  )
}
