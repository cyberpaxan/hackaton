import React from 'react';
import styles from './Main.module.scss';
import pic from '../../logo512.png';

const Main = () => {
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.main__form}>
                    <div className={styles.main__form__content}>
                        <div className={styles.main__form__content__title}>
                            <h1>
                                На данном хакатоне перед нами стояла задача
                                построить модель машинного обучения, которая
                                будет помогать создавать более точную и
                                детальную картину дебета нефти.
                                <br />
                                <br />
                                В первую очередь, мы столкнулись с проблемой
                                подбора датасетов. В качестве основных
                                параметров телеметрии мы решили взять линейное
                                давление, частоту вращения вала и мощность
                                двигателей. Потому что дебет нефти напрямую
                                зависит от трёх этих параметов.
                                <br />
                                <br />
                                Для решения проблемы неодновременной подачи
                                телеметрической информации мы прибегли к
                                интерполяции по методу ближайшей, но из-за
                                низкой корреляции данных пришлось отказаться от
                                этой идеи.
                                <br />
                                <br />
                                Поэтому
                            </h1>
                        </div>

                        <div className={styles.main__form__content__button}>
                            <button>Посмотреть на GitHub</button>
                        </div>
                    </div>
                </div>
                <div className={styles.main__image}>
                    <img src={pic} />
                </div>
            </div>
        </div>
    );
};

export default Main;
