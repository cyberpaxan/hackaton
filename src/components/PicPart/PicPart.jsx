import React from 'react';
import styles from './PicPart.module.scss';
import pic from '../../logo512.png';
import small1 from '../../small1.jpg';
import small2 from '../../small2.jpg';

const PicPart = () => {
    return (
        <div>
            <div className={styles.picpart}>
                <img src={small1} />
                <img className={styles.table} src={small2} />
            </div>
        </div>
    );
};

export default PicPart;
