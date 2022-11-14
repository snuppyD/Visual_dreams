import React from 'react';
// import { ContentWrapper } from '../content-wrapper';
import WaveImage from './wave.svg'
// import { Blc } from '../../styled/Sho.styled';
import styles from './styles.module.css';

export const Header = () => {
  return (
    <div>
        {/* <ContentWrapper className={styles.content}> */}
        {/* <div> */}
            <h1 className={styles.title}>{ `Створи власну\n Мрію` }</h1>
            <p className={styles.desc}>{`З нашим додатком ви нічого не забудете\n і будете йти до своєї цілі`}</p>
        {/* </ContentWrapper> */}
        {/* </div> */}
        <img src={ WaveImage } alt="" className={ styles.wave }/>
    </div>
  )
}
