import React from 'react';
import styles from './About.module.scss';
import pic from '../../logo512.png';
import github from '../../github.png';
import igor from '../../igor.png';
import misha from '../../misha.png';
import salavat from '../../salavat.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className={styles.about}>
                <div className={styles.about__title}>
                    <h1>О нашей команде</h1>
                </div>

                <div className={styles.about__blocks}>
                    <div className={styles.about__blocks__1}>
                        <img src={salavat} />
                        <h1>Салават Ягафаров</h1>
                        <h2>ML рзаработчик</h2>
                        <img className={styles.github} src={github} />
                    </div>
                    <div className={styles.about__blocks__2}>
                        <img src={igor} />
                        <h1>Игорь Лукс</h1>
                        <h2>Web-разработчик</h2>
                        <Link to='https://github.com/cyberpaxan'>
                            <img className={styles.github} src={github} />
                        </Link>
                    </div>
                    <div className={styles.about__blocks__3}>
                        <img src={misha} />
                        <h1>Михаил Акмурзин</h1>
                        <h2>ML рзаработчик</h2>
                        <Link to='https://github.com/Mis-prog'>
                            <img className={styles.github} src={github} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
