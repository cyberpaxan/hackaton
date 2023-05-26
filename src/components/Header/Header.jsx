import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.header__content}>
                    <h1>киберхакеры2009</h1>
                    <div className={styles.header__content__buttons}>
                        <Link
                            onClick={() =>
                                window.scrollTo({
                                    top: 1470,
                                    behavior: 'smooth',
                                })
                            }
                            style={{ textDecoration: 'none' }}
                        >
                            <h2>О нас</h2>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
