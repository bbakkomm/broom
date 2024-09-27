// Css style
import styles from "../../../assets/scss/pages/list/Detail.module.scss";

function Member(props) {
    const domain = [window.location.protocol, window.location.host].join('//') + '/';
    const {member} = props;
    console.log(member);

    return (
        <li className={styles.member__item}>
            <img src={ domain + member.thumb.path } alt={ member.name } className={styles.member__img}/>
            <div className={styles.member__info}>
                <div className={styles.member__data}>
                    <p className={styles.member__title}>{member.name}</p>
                    <span className={styles.member__status}>NEW</span>
                </div>
                <p className={styles.member__text}>{ member.introduce }</p>
            </div>
        </li>
    );
}

export default Member