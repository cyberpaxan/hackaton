import React from 'react';
import styles from './PicPart.module.scss';
import pic from '../../logo512.png';

const PicPart = () => {
    return (
        <div>
            <div className={styles.picpart}>
                <img src={pic} />
                <img src={pic} />
            </div>
        </div>
    );
};

export default PicPart;
