// Css style
import styles from "../../../assets/scss/pages/list/Detail.module.scss";

function Member(props) {

    const {member} = props;

    return (
        <li className={styles.member__item}>
            <img src={ member.src } alt={ member.name } className={styles.member__img}/>
            <div className={styles.member__info}>
                <div className={styles.member__data}>
                    <p className={styles.member__title}>{member.name}</p>
                    <span className={styles.member__status}>NEW</span>
                </div>
                {/* <p className={styles.member__text}>{ member.text }</p> */}
            </div>
        </li>
    );
}

export default Member